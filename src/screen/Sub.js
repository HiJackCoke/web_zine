import React from 'react';
import Layout from "../components/layout/Layout";

import insideData from '../components/data/inside/insideData.json';
import {Col, Container, Row} from "react-bootstrap";

const Sub = ({match}) => {



    const inside = insideData.find((p) => p.id === match.params.id)

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
                                                <h2>INSIDE</h2>
                                                <h4>{inside.title}</h4>

                                                {inside.context &&
                                                inside.context.map((inside, i) => (
                                                    <div key={i}>
                                                        <div className="monthly-grid-post__image space-mb--50 space-mt--50">
                                                            <img
                                                                src={inside.image}
                                                                className="img-fluid"
                                                            />
                                                        </div>
                                                        <div className="monthly-grid-post__content">
                                                            <h2>
                                                                {inside.subtitle}
                                                            </h2>
                                                            <p className="post-excerpt">
                                                                {inside.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
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

export default Sub;
