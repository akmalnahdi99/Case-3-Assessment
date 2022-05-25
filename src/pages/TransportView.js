import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import TransportDetails from "../component/TransportDetails";

export default function TransportView() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <TransportDetails />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}