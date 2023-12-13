import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p> Hello, my name is Armend Sinanovic and I am a student at NJIT studying Business Information Systems, I'm immersed in a field where technology meets business strategy. 
            My studies focus on how to utilize technology to solve business challenges and improve processes. I'm gaining skills in areas like data analysis, system management, and understanding how IT can support business objectives.
            This education is shaping me into a professional who can bridge the gap between tech teams and business leaders, ensuring technology aligns with and advances 
            business goals. My future in this dynamic field is filled with opportunities to drive innovation and efficiency.</p>
        <p>
          you can contact me on{' '}
          <a href="https://www.linkedin.com/in/armend-sinanovic-8b252a253/">Linkedin</a>.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>{title}</Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}