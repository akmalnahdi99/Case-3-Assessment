import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";
import TransportForm from "../component/TransportForm";
import TransportTable from "../component/TransportTable";

export default function Transportation() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <TransportForm />
                        <TransportTable />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}