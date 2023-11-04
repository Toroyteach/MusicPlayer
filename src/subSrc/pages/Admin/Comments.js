import React from 'react'

import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import '../../../subSrc/assets/users/mdcomment.css';


export default function Comments() {
    return (
        <div style={{ position: "relative", top: "5vh", overflowy: "auto" }}>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={2}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">WabiSabi</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={10}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <div className="container-fluid py-5">

                                    <div className="row">
                                        <div className="col-12">

                                            <div className="horizontal-timeline">

                                                <ul className="list-inline items">
                                                    <li className="list-inline-item items-list">
                                                        <div className="px-4">
                                                            <button type="button" class="btn btn-outline-warning" data-mdb-ripple-color="dark">Disable</button>
                                                            <br />
                                                            <img class="rounded-circle shadow-1-strong me-3"
                                                                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" width="65"
                                                                height="65" />
                                                            <br />
                                                            <p className="text-muted">It will be as simple as occidental in fact it will be Occidental Cambridge
                                                                friend</p>
                                                            <br />
                                                            <div>
                                                                <span class="badge bg-secondary">10th July 2023</span>
                                                            </div>
                                                        </div>
                                                    </li>

                                                </ul>

                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </div>
    );
}
