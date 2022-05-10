import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import club from "../../Assets/Projects/logo.png";
import sales from "../../Assets/Projects/sales.jpg";
import sim from "../../Assets/Projects/simulator.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={club}
              isBlog={false}
              title="Club Website"
              description="Our technical club needed a website and hence my first web development project purely reactjs without any backend."
              link="https://github.com/sasukeuchicha/techno"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sim}
              isBlog={false}
              title="Driving Simulator"
              description="This was my final year project which I loved and put effort into making it happen. Later realised it is such a mediocre project but still deserves to be here. Since I loved the effort and process. Plus I learned a lot during this project which gave a boost and will to create andd develop more."
              link="https://github.com/sasukeuchicha/driving_simulator_v2.0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sales}
              isBlog={false}
              title="ProjectSales"
              description="Tried Machine learning regression models to predict the future sales of a Walmart. A project that helped us learn about machine learning models, regression models and understanding of its applications."
              link="https://github.com/sasukeuchicha/sales_prediction"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
