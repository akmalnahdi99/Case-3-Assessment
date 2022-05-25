import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffAmenitiesRequestTable from "../../component/Staff/StaffAmenitiesRequestTable";

export default function StaffAmenitiesRequest() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffAmenitiesRequestTable />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}