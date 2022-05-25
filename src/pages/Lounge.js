import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import LoungeGallery from "../component/LoungeGallery";
import LoungeDetails from "../component/LoungeDetails";

export default function Lounge() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <LoungeGallery />
                        <LoungeDetails />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}