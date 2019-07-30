import React from "react";
import { Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <section className="section about">
        <div className="container">
          <h3>Hi, I'm Kevin. Nice to Meet You</h3>
          <p>
            Since beginning my journey as a freelance designer nearly 8 years
            ago, I've done remote work for agencies, consulted for startups, and
            collaborated with talented people to create digital products for
            both business and consumer use. I'm quietly confident, naturally
            curious, and perpetually working on improving my chops one design
            problem at a time.
          </p>
        </div>
      </section>
      <section className="section skills">
        <div className="container is-narrow">
          <div className="box">
            <div className="columns centered">
              <Row>
                <Col xs={12} md={3}>
                  <div className="column bord">
                    <i className="fas fa-file-code fa-3x" />
                    <br />
                    <br />
                    <h6>FRONT END</h6>
                    <ul>
                      <li>HTML5</li>
                      <li>CSS3</li>
                      <li>jQuery</li>
                      <li>JavaScript</li>
                      <li>React | Redux</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="column bord">
                    <i className="fas fa-server fa-3x" />
                    <br />
                    <br />
                    <h6>BACK END</h6>
                    <ul>
                      <li>ASP.NET Framework | Core</li>
                      <li>NodeJS</li>
                      <li>Express</li>
                      <li>Django</li>
                      <li>GraphQL</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="column bord">
                    <i className="fas fa-database fa-3x" />
                    <br />
                    <br />
                    <h6>DATABASE</h6>
                    <ul>
                      <li>SQL Server</li>
                      <li>mySQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="column">
                    <i className="fas fa-cloud fa-3x" />
                    <br />
                    <br />
                    <h6>DEPLOYMENT</h6>
                    <ul>
                      <li>GCP</li>
                      <li>Heroku</li>
                      <li>Git</li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
