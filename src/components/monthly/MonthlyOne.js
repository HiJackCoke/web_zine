import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import Monthly from '../data/monthly/One.json'

const MonthlyOne = () => {
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
                                        <h4>평화의 뿌리를 튼튼하게 하는 것은 살아남은 이들의 책임</h4>
                                    </div>
                                    {Monthly &&
                                    Monthly.map((monthly, i) => (
                                        <div key={i}>
                                            <div className="monthly-grid-post__image space-mb--r100">
                                                <img
                                                    className="img-fluid"
                                                    src={monthly.images}
                                                />
                                            </div>

                                            {/*<div className="monthly-grid-post__content">*/}
                                            {/*    <h2>*/}
                                            {/*        {monthly.title}*/}
                                            {/*    </h2>*/}
                                            {/*</div>*/}
                                            {/*<p>*/}
                                            {/*    {monthly.des}*/}
                                            {/*</p>*/}
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

export default MonthlyOne;
