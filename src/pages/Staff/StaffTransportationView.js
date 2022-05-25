import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffTransportDetails from "../../component/Staff/StaffTransportDetails";

export default function StaffTransportationView() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffTransportDetails />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}