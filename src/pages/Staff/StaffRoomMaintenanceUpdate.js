import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffRoomMaintenanceEdit from "../../component/Staff/StaffRoomMaintenanceEdit";

export default function StaffRoomMaintenanceUpdate() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffRoomMaintenanceEdit />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}