import React from "react";
import Layout from "../component/Layout";
import RoomCleaningForm from '../component/RoomCleaningForm';
import { Container } from "react-bootstrap";
import RoomCleaningTable from "../component/RoomCleaningTable";

export default function RoomCleaning() {
    return (
        <Layout>
            <Container>
            <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <RoomCleaningForm />
                        <RoomCleaningTable />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}