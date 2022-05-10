import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import pdf from "../../Assets/Jayanth_Resume.docx";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="SOFTWARE ENGINEER (Capgemini)"
              date="Sept 2021 - Present"
              content={[
                " Trained on administration of server operating systems such as Windows Server 2012, 2016 and linux distro Red hat server. Network Routing Protocols Fundamentals on Cisco Packet Tracer with simulations. Administration of cloud computing platforms for OS such as VMWare and Citrix. Trained on administration of DBMS such as SQL server and Oracle SQL "
              ]}
            />
            <Resumecontent
              title="INTERN (Donyati)"
              date="Mar 2021 - Apr 2021"
              content={[
                " Created a web testing script using selenium library on Python to perform web testing on Oracle EPM cloud assurance product. ",
                " Performed back-end testing using RestAPI based module called epmautomate and PowerShell to perform integrity checks on Oracle EPM cloud assurance product before and after scheduled maintenance.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Hackathons"
              content={[
                "Praticipated in hackathons and competative coding during my time pursuing degree. Had fun and built few apps and programs. Learnt Python, Java, frameworks during the process. ",
              ]}
            />
            <Resumecontent
              title="Football and Gym"
              content={[
                "For physical activities I take part in sports such as football and cricket, and frequently go to gym. Still progressing XD",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="B.E. TELECOMMUNICATION ENGINEERING "
              date="2017 - 2021"
              content={["CGPA: 7.14 "]}
            />
            <Resumecontent
              title="2 PUC (Deeksha College)"
              date="2016 - 2017"
              content={["Precentage: 69%"]}
            />
            <Resumecontent
              title="10TH  (Sri Chaitanya Techno School)"
              date="2014 - 2015"
              content={["Precentage: 86%"]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Absolutely have nothing to brag about, will update in the future........ Maybe"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
