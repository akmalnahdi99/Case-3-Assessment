import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../component/Layout";
import RoomMaintenanceForm from "../component/RoomMaintenanceForm";
import RoomMaintenanceTable from "../component/RoomMaintenanceTable";

export default function RoomMaintenance() {
    return (
        <Layout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <RoomMaintenanceForm />
                        <RoomMaintenanceTable />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}