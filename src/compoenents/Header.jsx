import React from "react";
import { Nav, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./Contacts";

const Header = () => {
  return (
    <div className="header">
      <Nav className="navbar">
        <Col xs={12} md={4}>
          <div className="name">
            <h2>Kevin Feng</h2>
          </div>
        </Col>
        <Col xs={{ span: 12, offset: 3 }} md={{ span: 4, offset: 4 }}>
          <div className="links">
            <Nav.Item>
              <Nav.Link href="" active={false}>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="">About Me</Nav.Link>
            </Nav.Item>
          </div>
        </Col>
      </Nav>
      <div className="lower_header">
        <h1>Full-Stack Developer</h1>
        <p>
          <i
            className="fas fa-map-marker-alt"
            style={{ marginRight: "15px" }}
          />
          Melbourne
        </p>
      </div>
      <div className="container contact">
        <Contacts />
      </div>
    </div>
  );
};

export default Header;
