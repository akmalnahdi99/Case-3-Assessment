import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffRoomCleaningDetails from "../../component/Staff/StaffRoomCleaningDetails";

export default function StaffRoomCleaningView() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffRoomCleaningDetails />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}