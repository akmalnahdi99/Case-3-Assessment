import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffRoomCleaningEdit from "../../component/Staff/StaffRoomCleaningEdit";

export default function StaffRoomCleaningUpdate() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffRoomCleaningEdit />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}