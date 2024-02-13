import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hi My Names Jude welcome to my blog</p>
        <p>
          I'm gonna be using this blog to show off my motorcycle and my love for
          it and also to show off my coding skills
        </p>
      </section>
    </Layout>
  );
}
