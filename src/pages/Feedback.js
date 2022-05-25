import React from "react";
import Layout from "../component/Layout";
import { Container } from "react-bootstrap";
import FeedbackForm from "../component/FeedbackForm";

export default function Feedback() {
    return (
        <Layout>
            <Container>
            <div className="row justify-content-center">
                    <div className='col-md-7 col-xs-11 my-2'>
                        <FeedbackForm />
                    </div>
                </div>
            </Container>
        </Layout>
    )
}