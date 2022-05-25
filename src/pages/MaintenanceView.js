import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import RoomMaintenanceDetails from "../component/RoomMaintenanceDetails";

export default function MaintenanceView() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <RoomMaintenanceDetails />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}