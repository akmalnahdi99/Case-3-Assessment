import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import AmenitiesRequestDetails from "../component/AmenitiesRequestDetails";

export default function AmenitiesRequestView() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <AmenitiesRequestDetails />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}