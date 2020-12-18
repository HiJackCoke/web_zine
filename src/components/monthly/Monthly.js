import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Monthly = ({Monthly}) => {
    return (
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
                                        <h4>{Monthly.title}</h4>
                                    </div>

                                    {Monthly.images &&
                                    Monthly.images.map((monthly, i) => (
                                        <div>
                                            <div key={i} className="monthly-grid-post__image space-mb--r100 space-mt--r100">
                                                <img
                                                    className="img-fluid"
                                                    src={monthly.url}
                                                />
                                            </div>

                                            <div className="monthly-grid-post__content">
                                                <h2>
                                                    {monthly.subTitle}
                                                </h2>
                                            </div>
                                            <p>
                                                {monthly.description}
                                            </p>
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

    );
};

export default Monthly;
