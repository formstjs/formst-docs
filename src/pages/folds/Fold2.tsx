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
    description: <>Create responsive forms for your app with ease</>,
  },
  {
    title: 'Out of the Box',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: <>Build flat, stepper or nested forms</>,
  },
  {
    title: 'Easy on the bundle',
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: <>Use middleware to modify form behaviour</>,
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div
      className={clsx(
        'col col-2',
        'text-center',
        'bg-light',
        'mx-5',
        styles.borderRadius20,
      )}>
      {imgUrl && (
        <div>
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default function Fold2() {
  return (
    <main className={clsx('my-5')}>
      <div
        className={clsx('container', 'text-center', 'w-50', 'py-5', 'mx-auto')}>
        <div className={clsx('fw-bold', styles.size60)}>Explore NativeBase</div>
        <div className={clsx(styles.size22)}>
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
