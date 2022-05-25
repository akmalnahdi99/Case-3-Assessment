import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffRoomMaintenanceTable from '../../component/Staff/StaffRoomMaintenanceTable'

export default function StaffRoomMaintenance() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffRoomMaintenanceTable />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}