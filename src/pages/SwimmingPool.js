import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import SwimmingPoolDetails from "../component/SwimmingPoolDetails";
import SwimmingPoolGallery from "../component/SwimmingPoolGallery";

export default function SwimmingPool() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <SwimmingPoolGallery />
                        <SwimmingPoolDetails />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}