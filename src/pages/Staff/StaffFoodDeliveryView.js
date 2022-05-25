import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffFoodDeliverDetails from '../../component/Staff/StaffFoodDeliveryDetails'

export default function StaffFoodDeliveryView() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffFoodDeliverDetails />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}