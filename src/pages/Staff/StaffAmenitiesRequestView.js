import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffAmenitiesRequestDetails from "../../component/Staff/StaffAmenitiesRequestDetails";

export default function AmenitiesRequestView() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffAmenitiesRequestDetails />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}