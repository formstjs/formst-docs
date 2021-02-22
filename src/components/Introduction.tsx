/* eslint-disable header/header */
import React from 'react';
import {Col, Row, Button, Image} from 'react-bootstrap';
import useBaseUrl from '@docusaurus/useBaseUrl';

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
          <a
            className=" btn px-3 py-2 mx-2 bgBlack "
            href="https://github.com/formstjs/formst">
            <span className="d-flex align-items-center">
              <svg
                className="octicon octicon-mark-github v-align-middle mr-2"
                height="16"
                viewBox="0 0 16 16"
                version="1.1"
                width="16"
                aria-hidden="true">
                <path
                  fill-rule="evenodd"
                  fill="white"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
              </svg>
              <span className="font-weight-bold mr-1 ">14.6K</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 20 20">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
            </span>
          </a>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center">
          <Image
            src={useBaseUrl('img/intro.png')}
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
