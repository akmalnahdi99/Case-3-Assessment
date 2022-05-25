import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import FoodDeliveryDetails from "../component/FoodDeliveryDetails";

export default function FoodDeliveryView() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <FoodDeliveryDetails />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}