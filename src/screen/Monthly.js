import React from 'react';
import Layout from "../components/layout/Layout";

import {Col, Container, Row} from "react-bootstrap";
import img from "../assets/images/Main/main1.png";
import img2 from "../assets/images/Main/main2.jpg";

const Monthly = ({match}) => {

    const Monthly = [
        {
            "id": "1",
            "images": img,
            "title": ""
        },
        {
            "id": "2",
            "images": img2,
            "title": ""
        }
    ]

    const monthly = Monthly.find((p) => p.id === match.params.id)

    return (
        <div
            style={{ backgroundColor: "#DDCDA1" }}
        >
            <Layout>
                <div className="space-mb--r100 space-mt--r100">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <Row>
                                    <Col>
                                        <div
                                            className="monthly-grid-post"
                                        >
                                            <div className="monthly-grid-post__title space-mb--r100">
                                                <h2>MONTHLY</h2>
                                                <h4>{monthly.title}</h4>
                                            </div>

                                            {monthly.images &&
                                            monthly.images.map((monthly, i) => (
                                                    <div key={i}>
                                                        <div className="monthly-grid-post__image space-mb--r100 space-mt--r100">
                                                            <img
                                                                className="img-fluid"
                                                                src={monthly.url}
                                                            />
                                                        </div>

                                                        <div className="monthly-grid-post__content">
                                                            <h2>
                                                                {monthly.subTitle}
                                                            </h2>
                                                            <p className="post-excerpt">
                                                                {monthly.description}
                                                            </p>
                                                        </div>

                                                    </div>
                                                )
                                            )}

                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Layout>
        </div>
    );
};

export default Monthly;
