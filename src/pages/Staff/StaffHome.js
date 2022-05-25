import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffHomeBody from "../../component/Staff/StaffHomeBody";

export default function StaffHome() {
    return (
        <StaffLayout>
            <Container>
                <div className='row justify-content-center'>
                    <StaffHomeBody />
                </div>
            </Container>
        </StaffLayout>
    )
}