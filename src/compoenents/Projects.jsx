import React from "react";
import { Row, Col } from "react-bootstrap";

const Project = () => {
  const react = require("../assests/react.png");
  const node = require("../assests/node.png");
  return (
    <div className="projects">
      <h2 className=" heading-secondary">Project Portfolio</h2>
      <div className="container">
        <div className="first">
          <Row>
            <Col xs={12} md={{ span: 3, offset: 2 }}>
              <div className="mycard">
                <div class="card__side card__side--front card__side--front-1">
                  <div class="card__picture card__picture--1" />
                  <h4 class="card__heading">
                    <span class="card__heading-span--1">
                      Booking Microservice
                    </span>
                  </h4>
                  <div class="card__details">
                    <ul>
                      <li>React</li>
                      <li>Hook | Context API</li>
                      <li>Google Map API</li>
                      <li>CSS</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back-1">
                  <div class="card__cta">
                    <div class="card__box">
                      <div class="card__description">
                        <p>
                          A back-end booking system, handles 1500+ requests /
                          sec
                        </p>
                      </div>
                    </div>
                    <a
                      href="https://github.com/aj-4/airbnb-booking-microsvc"
                      class="btn btn--white btn--github"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={{ span: 3, offset: 2 }}>
              <div class="mycard">
                <div class="card__side card__side--front card__side--front-2">
                  <div class="card__picture card__picture--2">&nbsp;</div>
                  <div class="card__heading">
                    <span class="card__heading-span--2">
                      Elevator Live Stream
                    </span>
                  </div>
                  <div class="card__details">
                    <ul>
                      <li>NodeJS</li>
                      <li>Express</li>
                      <li>Express</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </div>
                <div class="card__side card__side--back card__side--back-6">
                  <div class="card__cta">
                    <div class="card__box">
                      <div class="card__description">
                        <p>
                          Fully functional live stream app to practice elevator
                          pitches
                        </p>
                      </div>
                    </div>
                    <a href="#popup-5" class="btn btn--white btn--github">
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className="second">
          <Row>
            <Col xs={12} md={5} />
            <Col xs={12} md={{ span: 5, offset: 1 }} />
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Project;
