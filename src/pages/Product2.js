import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import Product2Gallery from "../component/Product2Gallery";
import Product2Details from "../component/Product2Details";

export default function Product2() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <Product2Gallery />
                        <Product2Details />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}