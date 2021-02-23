/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Head from '@docusaurus/Head';
import Introduction from '../components/Introduction';
import Features from '../components/Features';
import Demo from '../components/Demo';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout description="A JS library for quickly building high-performance forms in React">
      <Head>
        <meta
          property="og:description"
          content="A JS library for quickly building high-performance forms in React"
        />
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
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Introduction />
      <Features />
      <Demo />
    </Layout>
  );
}

export default Home;
