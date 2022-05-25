import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import BarGallery from "../component/BarGallery";
import BarDetails from "../component/BarDetails";

export default function Bar() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <BarGallery />
                        <BarDetails />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}