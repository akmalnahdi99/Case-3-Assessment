import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import GymGallery from "../component/GymGallery";
import GymDetails from "../component/GymDetails";

export default function Gym() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <GymGallery />
                        <GymDetails />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}