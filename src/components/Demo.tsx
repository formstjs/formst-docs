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
            {/* <Image
              src={useBaseUrl('img/Bitmap.png')}
              width={860}
              height={500}
              className="objectFit"
            /> */}
            <iframe
              src="https://codesandbox.io/embed/wispy-glade-714je?fontsize=14&hidenavigation=1&theme=dark"
              style={{
                width: '75%',
                height: '500px',
                border: 0,
                borderRadius: '4px',
                overflow: 'hidden',
              }}
              title="wispy-glade-714je"
              allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
              sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"></iframe>
          </Col>
        </Row>
      </div>
      <div style={{height: '130px'}}></div>
    </>
  );
};

export default Demo;
