import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import Games from "../components/Games";
import Members from "../components/Members";
import Gallery from "../components/Gallery";
import Recruitment from "../components/Recruitment";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Aria Guild</title>
        <meta name="title" content="Aria Guild" />
        <meta
          name="description"
          content="Aria is a competitive gaming guild founded in 2016. All is fair in love and war."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Feature />
      <Games />
      <Members />
      <Gallery />
      <Recruitment />

      <footer className={styles.footer}>2022 &copy; Aria Guild</footer>
    </div>
  );
}
