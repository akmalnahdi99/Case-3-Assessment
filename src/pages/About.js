import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import AboutDetails from "../component/AboutDetails";
export default function Facilities() {
    return (
        <Layout>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-6 text-white text-center" style={{fontFamily: "revert"}}><strong>Jual Mobil Murah Cash/Kredit Dengan Proses Cepat dan Aman</strong></h1>
                    
                </div>
            </div>
            <Container>
            <div className="row justify-content-center">
                <div className='col-md-10 col-xs-11 my-2'>
                    <AboutDetails />
                </div>
            </div>
            </Container>
        </Layout>
    )
}