import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffGuestFeedbackDetails from "../../component/Staff/StaffGuestFeedbackDetails";

export default function StaffGuestFeedbackView() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffGuestFeedbackDetails />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}