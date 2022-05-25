import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffGuestFeedbackTable from "../../component/Staff/StaffGuestFeedbackTable";

export default function StaffGuestFeedback() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffGuestFeedbackTable />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}