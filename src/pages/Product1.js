import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import Product1Gallery from "../component/Product1Gallery";
import Product1Details from "../component/Product1Details";

export default function Product1() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <Product1Gallery />
                        <Product1Details />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}