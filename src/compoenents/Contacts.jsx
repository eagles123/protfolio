import React from "react";
import { Row, Col } from "react-bootstrap";

const Contacts = () => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={3} md={{ span: 1, offset: 4 }}>
          <a
            href="https://www.linkedin.com/in/kevin-feng-a7b98958/"
            className="action"
            target={`_blank`}
          >
            <i className="fab fa-linkedin-in" />
            <span>LinkedIn</span>
          </a>
        </Col>
        <Col xs={3} md={1}>
          <a
            href="https://github.com/eagles121"
            className="action"
            target={`_blank`}
          >
            <i className="fab fa-github" />
            <span>Github</span>
          </a>
        </Col>
        <Col xs={3} md={1}>
          <a href="#" className="action">
            <i className="fas fa-at" />
            <span>Email</span>
          </a>
        </Col>
        <Col xs={3} md={1}>
          <a href="" className="action" target={`_blank`}>
            <i className="fas fa-newspaper" />
            <span>Resume</span>
          </a>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Contacts;
