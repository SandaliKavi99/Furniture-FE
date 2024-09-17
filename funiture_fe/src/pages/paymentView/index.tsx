import React, { useState } from 'react';
import Image from 'next/image'

import { CardNumberElement, CardExpiryElement, CardCvcElement, useStripe, useElements, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { Button, Theme } from '@radix-ui/themes';

import '@radix-ui/themes/styles.css';

import styles from './paymentView.module.scss'
import NavBar from '@/components/common/navBar';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CARD_ELEMENT_OPTIONS = {
    style: {
        base: {
            color: "#32325d",
            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
            fontSmoothing: "antialiased",
            fontSize: "16px",
            "::placeholder": {
                color: "#4f5051"
            }
        },
        invalid: {
            color: "#fa755a",
            iconColor: "#fa755a"
        }
    }
};

const CheckoutForm: React.FC = () => {
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoading(true);

        if (!stripe || !elements) {
            setError('Stripe.js has not loaded.');
            setLoading(false);
            return;
        }

        const cardNumberElement = elements.getElement(CardNumberElement);
        const cardExpiryElement = elements.getElement(CardExpiryElement);
        const cardCvcElement = elements.getElement(CardCvcElement);

        if (!cardNumberElement || !cardExpiryElement || !cardCvcElement) {
            setError('One or more card elements are missing.');
            setLoading(false);
            return;
        }

        const { token, error } = await stripe.createToken(cardNumberElement);

        console.log(token);

        if (error) {
            setError(error.message || 'An error occurred.');
            setLoading(false);
        } else if (token) {
            const orderId = '5839a82e-fd57-402b-b2e0-3862e079965e'; // Replace with your actual order ID
            const amount = 1200;

            const response = await fetch('http://localhost:8080/payment/addPayment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    token: token.id,
                    orderId: orderId,
                    amount: amount,
                }),
            });

            const paymentResult = await response.json();

            if (paymentResult.error) {
                setError(paymentResult.error);
            } else {
                console.log('Payment succeeded');
            }
            setLoading(false);
        }
    };

    var block = {
        title: "Furniture1",
        price: "0.8",
        colour: "Brownrish White",
        description: "Beautiful finish and unbelievable price",
        deliveryFee: "0.5",
        warrantyPeriod: 1,
        image: {
            src: "/images/carousal_item_1.png",
            alt: "Image 1"
        }
    }

    return (
        <Theme>
            <NavBar />
            <div className={styles.mainContainer}>
                <div style={{ padding: "50px 100px 50px 50px" }}>
                    <Image src={block.image.src} alt={block.image.alt} width={250} height={250} />
                    <div style={{ marginTop: "20px" }}>
                        <p>Item : <span style={{ fontWeight: "700" }}>{block.title}</span></p>
                        <p>Colour: <span style={{ fontWeight: "700" }}>{block.colour}</span></p>
                        <p>Description : <span style={{ fontWeight: "700" }}>{block.description}</span></p>
                        <p>Warranty Period: <span style={{ fontWeight: "700" }}>{block.warrantyPeriod}  years</span></p>
                    </div>
                </div>
                <form onSubmit={handleSubmit} className={styles.paymentForm}>
                    <div>
                        <div className={styles.headLabel}><h2>Card details</h2></div>
                        <label>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                <h4 className={styles.labelName}>Card Number</h4>
                                <Image src="/images/card-images.png" alt="cards" width={70} height={25} style={{ marginTop: '15px', marginLeft: '155px' }} />
                            </div>
                            <CardNumberElement options={CARD_ELEMENT_OPTIONS} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <h4 className={styles.labelName}>Expiration Date</h4>
                            <CardExpiryElement options={CARD_ELEMENT_OPTIONS} />
                        </label>
                    </div>
                    <div>
                        <label>
                            <h4 className={styles.labelName}>CVC</h4>
                            <CardCvcElement options={CARD_ELEMENT_OPTIONS} />
                        </label>
                    </div>
                    {error && <div>{error}</div>}
                    <div className={styles.payButtonContainer}>
                        <Button type="submit" disabled={loading} className={styles.payButton}>
                            Pay
                        </Button>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "center" }}>
                        <h5>Powered by </h5>
                        <Image src={'/images/stripe-icon.png'} alt={'stripe'} width={100} height={80} style={{ marginTop: '-10px', marginLeft: "-5px" }} />
                    </div>
                </form>
            </div>
        </Theme>
    );
};

const Checkout: React.FC = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default Checkout;
