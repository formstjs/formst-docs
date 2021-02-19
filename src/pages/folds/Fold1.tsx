import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from '../styles.module.css';
import {Image} from './CustomImage';

export default function Fold1() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <div className={clsx('hero hero--primary ', styles.heroBanner)}>
      {/* //className={clsx('hero hero--primary', styles.heroBanner)}> */}
      <div className="container flex-column d-flex  w-75 mh-100">
        {/* <button type="button" className="btn btn-primary ml-5">
          Primary
        </button> */}

        <div className="d-flex justify-content-center px-5">
          <h1 className={clsx('text-center fw-bold ', styles.size60)}>
            {siteConfig.tagline}
          </h1>
        </div>
        <div className="d-flex justify-content-center  px-5 mt-3 ">
          <Link
            className="btn  bg-white px-4  mx-5"
            style={{
              color: '#413AD4',
              fontSize: '16px',
              paddingTop: '0.70rem',
              paddingBottom: '0.70rem',
              boxShadow: '0px 1px 2px #19202C',
              fontWeight: 'bold',
            }}>
            Get Started
          </Link>
          <Link
            className="btn  px-4"
            style={{
              backgroundColor: 'black',
              color: 'white',
              fontSize: '16px',
              paddingTop: '0.70rem',
              paddingBottom: '0.70rem',
              boxShadow: '0px 1px 2px #19202C',
              fontWeight: 'bold',
            }}>
            1.46k
          </Link>

          {/* <Link
            className={clsx(
              'button button--secondary button--lg',
              styles.getStarted,
            )}
            to={useBaseUrl('docs/')}>
            Get Started
          </Link> */}
        </div>
        <div className="d-flex justify-content-center ">
          <Image />
        </div>
      </div>
    </div>
  );
}
