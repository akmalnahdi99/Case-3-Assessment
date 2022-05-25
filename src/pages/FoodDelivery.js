import React from "react";
import Layout from "../component/Layout";
import FoodDeliveryForm from "../component/FoodDeliveryForm";
import { Container } from "react-bootstrap";
import FoodDeliveryTable from "../component/FoodDeliveryTable";

export default function FoodDelivery() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <FoodDeliveryForm />
                        <FoodDeliveryTable />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}