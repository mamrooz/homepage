import {Col, Container, Row} from "react-bootstrap";
import React from "react";
import PropTypes from "prop-types";

export function CVSection({title, items, minHeight}) {
  return <Container fluid style={{marginBottom:"5vh", minHeight:minHeight}}>
    <Row>
      <Col style={{
        borderBottom: 'orange 2px solid'
      }}>
        <h2>{title.toUpperCase()}</h2>
      </Col>
    </Row>

      {items.map((item, index) => {
        return <Row><Col key={index}>
          {item}
        </Col></Row>
      })}
  </Container>;
}

CVSection.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  minHeight: PropTypes.string
};

CVSection.defaultProps = {
  minHeight: "100vh"
}

export default CVSection;