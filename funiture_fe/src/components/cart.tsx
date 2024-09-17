
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

import { Button } from "@radix-ui/themes";

import styles from './cart.module.scss';

interface CartImageProps {
    src: string;
    alt: string;
}

interface CartProps {
    title: string;
    colour: string;
    description: string;
    warrantyPeriod: number;
    price: string;
    deliveryFee: string;
    cartImage: CartImageProps;
}

const CartImage: React.FC<CartImageProps> = ({ src, alt }) => {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Image src={src} alt={alt} width={250} height={250} />
        </div>
    )
}

export const Cart: React.FC<CartProps> = ({ title, price, colour, description, warrantyPeriod, deliveryFee, cartImage }) => {

    return (
        <>
            <div className={styles.productContainer}>
                <div style={{ marginRight: "10%" }}>
                    <CartImage src={cartImage.src} alt={cartImage.alt} />
                    <div style={{ marginTop: "20px" }}>
                        <p>Item : <span style={{ fontWeight: "700" }}>{title}</span></p>
                        <p>Colour: <span style={{ fontWeight: "700" }}>{colour}</span></p>
                        <p>Description : <span style={{ fontWeight: "700" }}>{description}</span></p>
                        <p>Warranty Period: <span style={{ fontWeight: "700" }}>{warrantyPeriod}  years</span></p>
                    </div>
                </div>
                <div className={styles.cartContainer}>
                    <h2 style={{ color: "#585858" }}>Your Cart</h2>
                    <div style={{ marginTop: "50px", marginLeft: "100px" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                            <div style={{ width: "150px", height: '50px' }}><h4>Item Price</h4></div>
                            <div className={styles.label}><h4>{parseFloat(price)}$</h4></div>
                            <div style={{ width: "150px", height: '50px' }}><h4>Delivery Fee</h4></div>
                            <div className={styles.label}><h4>{parseFloat(deliveryFee)}$</h4></div>
                        </div>
                        <hr style={{ width: "500px", marginLeft: '-10px' }} />
                        <div style={{ display: "grid", gridTemplateColumns: "auto auto" }}>
                            <div style={{ width: "150px" }}><h4>Total Fee</h4></div>
                            <div style={{ width: "150px", marginLeft: "300px" }}><h4>{parseFloat(price) + parseFloat(deliveryFee)}$</h4></div>
                        </div>
                        <div className={styles.checkoutButtonContainer}>
                            <Link href="/paymentView">
                                <Button className={styles.checkButton}>Checkout</Button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}