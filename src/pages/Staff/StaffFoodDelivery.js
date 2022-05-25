import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffFoodDeliveryTable from "../../component/Staff/StaffFoodDeliveryTable";

export default function StaffFoodDelivery() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffFoodDeliveryTable />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}