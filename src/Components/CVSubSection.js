import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";

export function CVSubSection({title, items, xs, sm, md, lg, xl}) {
  return <Container fluid style={{marginTop: "3vh", border: "1px solid sienna", borderRadius: 20}}>
    <Row>
      <Col>
        <Row style={{
          backgroundColor: "sienna",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginLeft: -16,
          marginRight: -16
        }}><Col style={{textAlign: "center", marginBottom: "1vh", marginTop: "1vh", textTransform: "uppercase"}}>
          <h4 style={{marginBottom:0}}>{title}</h4></Col></Row>
        <Row>
          {items.map((item, index) => {
            return <Col key={index} xs={xs} sm={sm} md={md} lg={lg} xl={xl}>
              {item}
            </Col>
          })}
        </Row>
      </Col>
    </Row>
  </Container>;
}

CVSubSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
};

CVSubSection.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 12,
}

export default CVSubSection;