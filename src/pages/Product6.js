import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import Product6Details from "../component/Product6Details";
import Product6Gallery from "../component/Product6Gallery";

export default function Product6() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <Product6Gallery />
                        <Product6Details />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}