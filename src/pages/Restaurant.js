import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import RestaurantGallery from "../component/RestaurantGallery";
import RestaurantDetails from "../component/RestaurantDetails";

export default function Restaurant() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <RestaurantGallery />
                        <RestaurantDetails />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}