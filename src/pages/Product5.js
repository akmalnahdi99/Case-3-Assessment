import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import Product5Gallery from "../component/Product5Gallery";
import Product5Details from "../component/Product5Details";

export default function Product5() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <Product5Gallery />
                        <Product5Details />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}