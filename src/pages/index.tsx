/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Head from '@docusaurus/Head';
import styles from './styles.module.css';
import {Col, Row} from 'react-bootstrap';
import Introduction from '../components/Introduction';

const features = [
  {
    title: 'Simple To Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Create a MobX-State-Tree model that reflects the functionality and the
        structure of your form and simply plug it into your form.
      </>
    ),
  },
  {
    title: 'Middleware and Interdependency',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Intercept and manipulate the input or update another field on the basis
        of a change in value. As it is closely associated with the Data-Layer,
        field manipulation becomes very simple.
      </>
    ),
  },
  {
    title: 'Out of the Box',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Get various validations for all fields right out of the box. Want to
        create a custom one? It's just as simple.
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
    <div className={clsx('col col--3')}>
      {imgUrl && (
        <div>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3
        style={{
          fontSize: '20px',
          letterSpacing: 0,
        }}>
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}
const Features = () => (
  <div className="container">
    <div className="row">
      {features.map((feature, key) => {
        return (
          <div className={clsx('col col--3', styles.textAlignCenter)}>
            <img
              src={feature.imageUrl}
              height="58px"
              width="80px"
              className={clsx(styles.image)}></img>
            <h3
              style={{
                fontSize: '20px',
                letterSpacing: 0,
              }}>
              {feature.title}
            </h3>
            <p style={{color: '#5e5e5e', fontWeight: 500}}>
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  </div>
);
function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <Head>
        <meta property="og:description" content="My custom description" />
        <meta charSet="utf-8" />
        <title>Formst</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
          integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Introduction />
      {/* <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main> */}
      {/* <Row>
          <Col>Test</Col>
        </Row> */}
      {/* {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )} */}
      {/* </main> */}
    </Layout>
  );
}

export default Home;
