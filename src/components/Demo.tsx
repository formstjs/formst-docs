/* eslint-disable header/header */
import React from 'react';
import {Col, Row, Image} from 'react-bootstrap';
import useBaseUrl from '@docusaurus/useBaseUrl';

const Demo = () => {
  return (
    <>
      <div
        className=" bg-light py-5 position-relative"
        style={{height: '700px'}}>
        <Row>
          <Col className="d-flex justify-content-center text-center ">
            <Col>
              <h1 className="font-weight-bold font50">
                Build forms in React, without the tears
              </h1>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center text-center ">
            <p>
              <Col>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu
              </Col>
              <Col>
                fugiat nulla pariatur excepteur sint occaecat cupidatat.
              </Col>
            </p>
          </Col>
        </Row>
        <Row>
          <Col
            className="d-flex justify-content-center position-absolute "
            style={{bottom: '-60px'}}>
            <Image
              src={useBaseUrl('img/Bitmap.png')}
              width={860}
              height={500}
              className="objectFit"
            />
          </Col>
        </Row>
      </div>
      <div style={{height: '130px'}}></div>
    </>
  );
};

export default Demo;
