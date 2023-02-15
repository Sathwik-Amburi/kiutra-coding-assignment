import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Kiutra Coding Assingment</title>
        <meta name="description" content="Progress Monitor" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Progress Monitor built by
            <code className={styles.code}> Sathwik Amburi</code>
          </p>
        </div>
        <div className={styles.grid}>
          <a
            href="https://github.com/Sathwik-Amburi/kiutra-coding-assignment"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Project Repo <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find the code for this project on&nbsp;Github.
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
