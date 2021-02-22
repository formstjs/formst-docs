/* eslint-disable header/header */
import React from 'react';
import {Col, Row, Card, CardDeck} from 'react-bootstrap';
import useBaseUrl from '@docusaurus/useBaseUrl';
const features = [
  {
    title: 'Simple To Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: <>Create a MobX-State-Tree model that reflects the</>,
  },
  {
    title: 'Middleware and Interdependency',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Intercept and manipulate the input or update another field on the basis
      </>
    ),
  },
  {
    title: 'Out of the Box',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Get various validations for all fields right out of the box. Want to
        create a cus
      </>
    ),
  },
  {
    title: 'Easy on the bundle',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: <>1.7kB. That's all.</>,
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <Card className="bg-light border-0 borderRadius25 col-md-6">
      <Card.Img
        variant="top"
        //   src="../../static/img/chart_9.png"
        src={imgUrl}
        className="objectFit py-4"
        height={100}
        width={100}
      />
      <Card.Body className="text-center">
        <Card.Title className="font-weight-bold">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
}

const Features = () => {
  return (
    <div className="py-5 bg-white">
      <Row>
        <Col className="d-flex justify-content-center text-center ">
          <Col>
            <h1 className="font-weight-bold font50">Explore NativeBase</h1>
          </Col>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center text-center w-25 ">
          <p className="px-2">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur excepteur sint occaecat
            cupidatat.
          </p>
        </Col>
      </Row>
      {features && features.length > 0 && (
        <CardDeck className="mx-md-5 mx-lg-5 px-3 ">
          {features.map(({title, imageUrl, description}) => (
            <Feature
              key={title}
              title={title}
              imageUrl={imageUrl}
              description={description}
            />
          ))}
        </CardDeck>
      )}
    </div>
  );
};

export default Features;
