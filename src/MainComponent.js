import React, {useEffect, useState} from "react";
import {Col, Container, Row, Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import logo from './images/logo.svg';
import phone from './images/phone.png';
import scrollDown from './images/scrollDown.png';
import mail from './images/mail.svg';
import linkedin from './images/linkedin.png';
import github from './images/github.png';
import {skills} from "./Components/Skill";
import CVSection from "./Components/CVSection";
import {experiences, educations} from "./Components/CVItem";
import {CVSubSection} from "./Components/CVSubSection";

export function MainComponent(props) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [counter, setCounter] = useState(0);
  const typingInterval = 30;
  const pageStyle = {backgroundColor: "black"};
  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  }

  const handleResize = () => {
    setWindowHeight(window.innerHeight);
    setWindowWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    window.setTimeout(() => {
      setCounter(counter + 1);
    }, typingInterval);
  }, []);

  useEffect(() => {
    if (counter > 60)
      return;
    window.setTimeout(() => {
      setCounter(counter + 1);
    }, counter / 2 < 9 ? typingInterval : typingInterval / 2);
  }, [counter])
  return (
    <>
      <div className={"background"} style={{background: "linear-gradient(to bottom right, black 0%, darkgreen 100%)"}}>
      </div>
      <Container fluid>
        {counter > 60 ? <Navbar bg="dark" variant="dark" expand="lg" fixed={"top"} style={{backgroundColor: "black"}}
                                className={"fadeInAnimated"}>
            <Container>
              <Navbar.Brand href="#home"><img
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top makeImageWhite"
                alt="React Bootstrap logo"
              /> Rez Rahimi</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav"/>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#skills">Skills</Nav.Link>
                  <Nav.Link href="#experience">Experience</Nav.Link>
                  <Nav.Link href="#education">Education</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          : ""}
        <Container>
          <Row style={{minHeight: "100vh"}}>
            <Col sm={12}>
              <div style={{display: "table", height: "80%"}}>
                <div style={{display: "table-cell", verticalAlign: "middle"}} id={"home"}>
                  <Container>
                    <Row>
                      <Col style={{
                        fontSize: "8vh",
                        lineHeight: "7vh",
                        color: "white",
                        borderBottom: counter / 2 > 9 ? "2px solid orange" : "none",
                        fontWeight: 900
                      }} className={"textLoadAnimation"}>
                        <div>{"Rez".substr(0, counter / 2 > 3 ? 3 : counter / 2) + (counter / 2 < 3 && counter % 2 == 0 ? "_" : "")}</div>
                        <div>{"Rahimi".substr(0, counter / 2 > 9 ? 9 : counter / 2 > 3 ? counter / 2 - 3 : 0) + (counter / 2 > 3 && counter / 2 < 9 && counter % 2 == 0 ? "_" : "")}</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{fontSize: "3.5vh", color: "white"}}>
                        <div>{"Full Stack Developer".substr(0, counter / 2 > 9 ? counter / 2 - 9 : 0) + (counter / 2 > 9 && counter / 2 < 29 && counter / 2 % 2 == 0 ? "_" : "")}</div>
                      </Col>
                    </Row>
                    <Row style={{fontSize: "1vh", color: "white", opacity: counter / 2 > 30 ? 1 : 0}}>
                      <Col>
                        <img src={linkedin} style={{height: "3vh", cursor: "pointer"}}
                             onClick={e => window.open('https://www.linkedin.com/in/mohammadrezarahimi/')}/>
                      </Col>
                      <Col>
                        <img src={github} style={{height: "3vh", cursor: "pointer"}}
                             onClick={e => window.open('https://github.com/mamrooz')}/>
                      </Col>
                      <Col>
                        <a href={'mailto:me@rezrahimi.com'}><img src={mail}
                                                                 style={{height: "3vh", cursor: "pointer"}}/></a>
                      </Col>
                    </Row>
                  </Container>
                </div>
              </div>
              {counter > 60 ?
                <div className={scrollPosition > 20 ? "fadeOutAnimation" : "flashAnimation"}
                     style={{
                       position: "absolute",
                       width: "100%",
                       left: 0,
                       bottom: "15%",
                       textAlign: "center",
                       display: "flex",
                       justifyContent: "space-around"
                     }}>
                  <img src={scrollDown} height={50} className={"makeImageWhite"}/>
                </div> : ""}
            </Col>
          </Row>
        </Container>
        {counter > 60 ?
          <>
            <Container>
              <Row>
                <Col>
                  <div id={"skills"} style={{paddingTop: 60}}>
                    <CVSection title={'Skills'} minHeight={"0"}
                               items={skills.map(skillSet => {
                                 return <CVSubSection title={skillSet.name}
                                                      items={skillSet.items} xs={12} sm={12} md={6} lg={6} xl={4}/>
                               })}/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div id={"experience"} style={{paddingTop: 60}}>
                    <CVSection title={'Experience'}
                               items={experiences} minHeight={"0"}/>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col>
                  <div id={"education"} style={{paddingTop: 60}}>
                    <CVSection title={'Education'}
                               items={educations} minHeight={"0"}/>
                  </div>
                </Col>
              </Row>
            </Container>
            <Row>
              <Col style={{padding: 0, minHeight: 200, backgroundColor: "#343a40"}} className={"dark"}>
                <Container>
                  <Row>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} style={{padding: 20}}>
                      <div style={{borderBottom: "1px solid orange", marginBottom: 10}}>Navigation</div>
                      <a href="#home">Home</a>
                      <a href="#skills">Skills</a>
                      <a href="#experience">Experience</a>
                      <a href="#education">Education</a>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} style={{padding: 20}}>
                      <div style={{borderBottom: "1px solid orange", marginBottom: 10}}>Links</div>
                      <a href="https://www.linkedin.com/in/mohammadrezarahimi/" target={"_blank"}>Linkedin</a>
                      <a href="https://github.com/mamrooz" target={"_blank"}>GitHub</a>
                    </Col>
                    <Col xs={12} sm={12} md={4} lg={3} xl={3} style={{padding: 20}}>
                      <div style={{borderBottom: "1px solid orange", marginBottom: 10}}>Downloads</div>
                      <a href="RezRahimi_Resume.pdf">Resume</a>
                    </Col>
                  </Row>
                </Container>
              </Col>
            </Row>
          </> : ""}
      </Container>
    </>
  )
}

export default MainComponent;
