import React from 'react';

import { Theme } from "@radix-ui/themes";

import Navigation from "@/components/common/navBar";
import { Cart } from '@/components/cart';

import '@radix-ui/themes/styles.css';

var block = {
    title: "Furniture1",
    price: "0.8",
    colour: "Brownrish White",
    description: "Beautiful finish and unbelievable price",
    deliveryFee: "0.5",
    warrantPeriod: 1,
    image: {
        src: "/images/carousal_item_1.png",
        alt: "Image 1"
    }
}

export default function CartView() {

    return (
        <>
            <Theme>
                <Navigation></Navigation>
                <div style={{width:"200px", marginTop:"30px", marginLeft:"30px"}}><h2>Add item to Cart</h2></div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Cart title={block.title} price={block.price} cartImage={block.image} colour={block.colour} description={block.description} warrantyPeriod={block.warrantPeriod} deliveryFee={block.deliveryFee} />
                </div>
            </Theme>
        </>
    );
}

export { Cart };
