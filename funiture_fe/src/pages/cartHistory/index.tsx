import React from 'react';
import Image from 'next/image'

import { Flex, Table, Theme } from "@radix-ui/themes";

import Navigation from "@/components/common/navBar";

import '@radix-ui/themes/styles.css';

var block = {
    title: "Furniture1",
    price: "0.8",
    paymentStatus: "Successful",
    paidDtae: "2023-02-05",
    deliveryStatus: "On-going",
    warrantPeriod: 1,
    colour: "Brownrish White",
    description: "Beautiful finish and unbelievable price",
    deliveryFee: "0.5",
    image: {
        src: "/images/carousal_item_1.png",
        alt: "Image 1"
    }
}

export default function CartHistory() {

    return (
        <>
            <Theme>
                <Navigation></Navigation>

                <div style={{ width: "200px", marginTop: "30px", marginLeft: "30px" }}><h2>Cart History</h2></div>
                <div style={{ display:'flex', flexDirection:'row'}}>
                    <div style={{ padding: "50px 100px 50px 50px" }}>
                        <Image src={block.image.src} alt={block.image.alt} width={250} height={250} />
                        <div style={{ marginTop: "20px" }}>
                            <p>Item : <span style={{ fontWeight: "700" }}>{block.title}</span></p>
                            <p>Colour: <span style={{ fontWeight: "700" }}>{block.colour}</span></p>
                            <p>Description : <span style={{ fontWeight: "700" }}>{block.description}</span></p>
                            <p>Warranty Period: <span style={{ fontWeight: "700" }}>{block.warrantPeriod}  years</span></p>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center", width: "50%", fontSize: '30px' }}>
                        <Flex direction="column" gap="10" maxWidth="850px">
                            <Table.Root size="1">
                                <Table.Header style={{ fontSize: '15px' }}>
                                    <Table.Row>
                                    <Table.ColumnHeaderCell>No.</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>Furniture</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>Payment($) : Status</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>Paid Date</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>Warranty Period</Table.ColumnHeaderCell>
                                        <Table.ColumnHeaderCell>Delivery Status</Table.ColumnHeaderCell>
                                    </Table.Row>
                                </Table.Header>

                                <Table.Body style={{ fontSize: '15px' }}>
                                    <Table.Row>
                                    <Table.RowHeaderCell>{1}</Table.RowHeaderCell>
                                        <Table.RowHeaderCell>{block.title}</Table.RowHeaderCell>
                                        <Table.Cell>{block.price} : {block.paymentStatus}</Table.Cell>
                                        <Table.RowHeaderCell>{block.paidDtae}</Table.RowHeaderCell>
                                        <Table.Cell>{block.warrantPeriod}</Table.Cell>
                                        <Table.RowHeaderCell>{block.deliveryStatus}</Table.RowHeaderCell>
                                    </Table.Row>
                                </Table.Body>
                            </Table.Root>
                        </Flex>
                    </div>
                </div>
            </Theme>
        </>
    );
}

