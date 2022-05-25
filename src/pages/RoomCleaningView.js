import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import RoomCleaningDetails from "../component/RoomCleaningDetails";

export default function RoomCleaningView() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <RoomCleaningDetails />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}