import React from 'react';
import Layout from "../components/layout/Layout";

import {Col, Container, Row} from "react-bootstrap";

const Special = ({match}) => {

    const specials = [
        {
            id: "1",
            title: "1sdffff"
        },
        {
            id: "2",
            title: "asdfasdf"
        }
    ]

    const special = specials.find((p) => p.id === match.params.id)

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
                                                <h4>{special.title}</h4>
                                            </div>

                                            {special.images &&
                                            special.images.map((special, i) => (
                                                    <div key={i}>
                                                        <div className="monthly-grid-post__image space-mb--r100 space-mt--r100">
                                                            <img
                                                                className="img-fluid"
                                                                src={special.url}
                                                            />
                                                        </div>

                                                        <div className="monthly-grid-post__content">
                                                            <h2>
                                                                {special.subTitle}
                                                            </h2>
                                                            <p className="post-excerpt">
                                                                {special.description}
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

export default Special;
