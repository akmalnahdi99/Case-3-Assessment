import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";
import AmenitiesRequestForm from '../component/AmenitiesRequestForm'
import AmenitiesRequestTable from "../component/AmenitiesRequestTable";

export default function AmenitiesRequest() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <AmenitiesRequestForm />
                        <AmenitiesRequestTable />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}