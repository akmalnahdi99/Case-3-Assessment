import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffTransportTable from "../../component/Staff/StaffTransportTable";

export default function StaffTransportation() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffTransportTable />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}