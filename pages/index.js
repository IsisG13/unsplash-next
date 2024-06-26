import Head from "next/head";
import axios from "axios";
import styles from "@/styles/Home.module.css";
import Cabecalho from "./containers/cabecalho";
import Unsplash_api from "./api/unsplash_api";

export default function Home() {
  return (
    <>
      <Head>
        <title>Unsplash</title>
        <meta name="description" content="Generated by Unsplash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Cabecalho/>
        <hr/>
      </main>

      <header>
        <div className={styles.Img}></div>
        <div className={styles.Img2}></div>
        <div className={styles.App}>
          <div className={styles.container}>
            <h1> Search </h1>
            <p>Search high-resulation images from Unsplash</p>
            <input type="text" placeholder="Enter your kaywords..."/>
          </div>
        </div>
      </header>
    </>
  );
}
