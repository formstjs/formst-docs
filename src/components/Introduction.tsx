/* eslint-disable header/header */
import React from 'react';
import {Col, Row, Button, Container, Image, Figure} from 'react-bootstrap';

const Introduction = () => {
  return (
    <div className="bg py-4">
      <Row className="py-2">
        <Col className="d-flex justify-content-center text-center text-white">
          <h1 className="font-weight-bold font50">
            <Col>A JS library for quickly building</Col>
            <Col> high-performance forms in React</Col>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Button className=" btn btn-secondary px-3 py-2 mx-2">
            Get Started
          </Button>
          <Button className=" btn px-3 py-2 mx-2 bgBlack">
            <span className="font-weight-bold">14.6K</span>
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Image
            src="../../static/img/intro.png"
            width={860}
            height={440}
            className="objectFit"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Introduction;
