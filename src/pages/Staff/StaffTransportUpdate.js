import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffTransportEdit from "../../component/Staff/StaffTransportEdit";

export default function StaffTransportUpdate() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffTransportEdit />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}