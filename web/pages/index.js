import Head from 'next/head';
import Link from 'next/link';

import Button from '@material-ui/core/Button';

import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Date from '../components/date';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2 className={utilStyles.headingLg}><a href="/atlas">Atlas</a></h2>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
    }
  };
}
