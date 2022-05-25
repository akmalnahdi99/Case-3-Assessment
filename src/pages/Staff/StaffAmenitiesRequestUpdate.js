import React from "react";
import StaffLayout from "../../component/Staff/StaffLayout";
import { Container } from "react-bootstrap";
import StaffAmenitiesRequestEdit from "../../component/Staff/StaffAmenitiesRequestEdit";

export default function StaffFoodDeliveryUpdate() {
    return (
        <StaffLayout>
            <Container>
                <div className="row justify-content-center">
                    <div className='col-md-10 col-xs-11 my-2'>
                        <StaffAmenitiesRequestEdit />
                    </div>
                </div>
            </Container>
        </StaffLayout>
    )
}