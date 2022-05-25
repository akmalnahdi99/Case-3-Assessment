import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffRoomCkeaningTable from "../../component/Staff/StaffRoomCleaningTable";

export default function StaffRoomCleaning() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffRoomCkeaningTable />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}