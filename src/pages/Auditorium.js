import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import AuditoriumGallery from "../component/AuditoriumGallery";
import AuditoriumDetails from "../component/AuditoriumDetails";

export default function Auditorium() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <AuditoriumGallery />
                        <AuditoriumDetails />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}