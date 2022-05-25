import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffRoomMaintenanceDetails from "../../component/Staff/StaffRoomMaintenanceDetails";

export default function StaffRoomMaintenanceView() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffRoomMaintenanceDetails />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}