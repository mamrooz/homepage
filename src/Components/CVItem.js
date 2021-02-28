import {Col, Row} from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";
import sharifLogo from "../images/logo-sharif.png"
import uofcLogo from "../images/logo-uofc.svg"
import eventyabLogo from "../images/logo-eventyab.png"
import airbleLogo from "../images/logo-airble.svg"

export function CVItem({position, company, dateFrom, dateTo, location, notes, logo}) {
  return <>
    <Row style={{paddingTop: 10, paddingBottom: 10}}>
      <Col xs={12} sm={12} md={logo != null ? 9 : 12} lg={logo != null ? 10 : 12} xl={logo != null ? 10 : 12}>
        <Row>
          <Col style={{fontSize: "2.75vh", fontWeight: 600}}>
            {position}
          </Col>
        </Row>
        <Row>
          <Col style={{fontSize: "2.25vh"}}>
            {company}
          </Col>
        </Row>
        <Row style={{fontSize: "1.75vh"}}>
          <Col sm={6}>
            {dateFrom} - {dateTo}
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            {location}
          </Col>
        </Row>
      </Col>
      {logo != null ?
        <Col xs={{span: 12, order: "first"}} sm={{span: 12, order: "first"}} md={{span: 3, order: "last"}}
             lg={{span: 2, order: "last"}} xl={{span: 2, order: "last"}} style={{textAlign: "center"}}>
          <img src={logo.file} style={{filter: logo.filter, height: 130}}/>
        </Col>
        : ""}
    </Row>
    {notes != null ?
      <Row>
        <Col style={{fontSize: "2vh", fontWeight: 200}}>
          <ul>
            {notes.map((note, index) => {
              return <li key={index}>
                {note}
              </li>
            })}
          </ul>
        </Col>
      </Row>
      : ""
    }
  </>;
}

CVItem.propTypes = {
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  dateFrom: PropTypes.string.isRequired,
  dateTo: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  notes: PropTypes.array
}

export default CVItem;

export const experiences = [<CVItem logo={{file: airbleLogo, filter: "none"}} position={"Software Developer"}
                                    company={"Airble Aviation Inc."}
                                    dateFrom={"Jan 2020"} dateTo={"Present"} location={'Remote'}
                                    notes={["Design maintenance and implementation of Database, RESTful APIs, website and app.",
                                      "Technologies used: MySQL, Node.js, React.js, Flux, React Native, Expo, JavaScript, CSS, Digital Ocean Cloud."]}/>,
  <CVItem logo={{file: eventyabLogo, filter: "none"}} position={"Software Developer"}
          company={"EventYab Cloud Services Inc."}
          dateFrom={"Jun 2014"} dateTo={"Present"} location={'Calgary, AB'}
          notes={["Development and maintenance of ticket sales, seat map and live reporting systems.",
            "Technologies used: MySQL, PHP, Symfony, JavaScript, CSS, Bootstrap, Paypal API."]}/>,
  <CVItem logo={{file: uofcLogo, filter: "none"}} position={"Research Assistant"} company={"University of Calgary"}
          dateFrom={"May 2011"} dateTo={"Jan 2021"} location={'Calgary, AB'}
          notes={[<>Location Recommendation for Social Networks:
            <ul>
              <li>Recommends locations to the users based on their preferences and accessibility of
                the
                locations.
              </li>
              <li>Technologies used: Java, MATLAB, Python and MySQL.</li>
            </ul>
          </>,
            <>Collaborations:
              <ul>
                <li>Taxi Route Recommendation. (Java, C++, PostgreSQL)
                </li>
                <li>Route and Travel Mode Recommendation. (Java, C#)</li>
                <li>Cold-Heavy Oil Production with Sand (CHOPS) Optimization. (Java, Matlab)</li>
              </ul>
            </>, "10 Publications"]}/>];

export const educations = [<CVItem logo={{file: uofcLogo, filter: "none"}} position={"Doctor of Philosophy"}
                                   company={"Geomatics Engineering | University of Calgary"}
                                   dateFrom={"May 2014"} dateTo={"Jan 2021"} location={'Calgary, Canada'}
                                   notes={["Thesis Title: Behavior-based and Contextual Location Recommendation for Location Based Social Networks."]}/>,
  <CVItem logo={{file: uofcLogo, filter: "none"}} position={"Master of Science"}
          company={"Geomatics Engineering | University of Calgary"}
          dateFrom={"May 2011"} dateTo={"Jan 2014"} location={'Calgary, Canada'}
          notes={["Thesis Title: Activity-based and Behavior-based Location Recommendation for Location Based Social Networks."]}/>,
  <CVItem logo={{file: sharifLogo, filter: "invert(60)"}} position={"Bachelor of Science"}
          company={"Software Engineering | Sharif University of Technology"}
          dateFrom={"Sep 2005"} dateTo={"Sep 2010"} location={'Tehran, Iran'}
  />];