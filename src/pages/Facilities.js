import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import FacilitiesItem from "../component/FacilitiesItems";
export default function Facilities() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <FacilitiesItem />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}