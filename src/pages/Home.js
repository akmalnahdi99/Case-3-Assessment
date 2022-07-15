import React from "react";
import Layout from "../component/Layout";
import SlideShow from "../component/SlideShow";
import HomeBody from "../component/HomeBody";
import { Container } from "react-bootstrap";

export default function Home() {
    return (
        <Layout>
            <SlideShow/>
            <Container>
                    <div className="row">
                        <HomeBody />
                    </div>
            </Container>
        </Layout>
    )
}