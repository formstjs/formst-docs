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
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../styles.module.css';

const features = [
  {
    title: 'Simple To Use',
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: <>Create a MobX-State-Tree model tha</>,
  },
  {
    title: 'Middleware and Interdependency',
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: <>Intercept and manipulate the input or u</>,
  },
  {
    title: 'Out of the Box',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>Get various validations for all fields right out of the box.</>
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

export default function Fold2() {
  return (
    <main>
      <div
        className={clsx(
          'container',
          styles.textAlignCenter,
          styles.mainContainer,
        )}>
        <h1 className={clsx('hero__title')}>Explore NativeBase</h1>
        <div className={clsx(styles.subtitle)}>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat.
        </div>
      </div>
      {features && features.length > 0 && (
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
      )}
    </main>
  );
}
