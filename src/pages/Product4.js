import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import Product4Gallery from "../component/Product4Gallery";
import Product4Details from "../component/Product4Details";

export default function Product4() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <Product4Gallery />
                        <Product4Details />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}