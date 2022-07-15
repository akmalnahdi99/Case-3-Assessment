import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import Product3Gallery from "../component/Product3Gallery";
import Product3Details from "../component/Product3Details";

export default function Product3() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <Product3Gallery />
                        <Product3Details />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}