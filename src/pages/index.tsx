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
import styles from './styles.module.css';
import Head from '@docusaurus/Head';
import Fold2 from './folds/Fold2';
import Fold1 from './folds/Fold1';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout description="Description will go into a meta tag in <head />">
      <Head>
        <meta property="og:description" content="My custom description" />
        <meta charSet="utf-8" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl"
          //@ts-ignore
          crossorigin="anonymous"></link>
        <title>Formst</title>
      </Head>
      <Fold1 />
      <Fold2 />
    </Layout>
  );
}

export default Home;
