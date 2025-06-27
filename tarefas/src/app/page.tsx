import Image from "next/image";
import styles from "../../styles/home.module.css";
import Head from "next/head";

import heroImg from "../../public/assets/hero.png";

import { db } from "../services/firebaseConnection";
import { collection, getDocs } from "firebase/firestore";

export default async function Home() {
  const commentRef = collection(db, "comments");
  const postRef = collection(db, "tarefas");

  const [commentSnapshot, postSnapshot] = await Promise.all([
    getDocs(commentRef),
    getDocs(postRef),
  ]);

  const posts = postSnapshot.size || 0;
  const comments = commentSnapshot.size || 0;

  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas+ | Organize suas tarefas de forma fácil</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            alt="Logo Tarefas+"
            src={heroImg}
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar <br /> seus estudos e tarefas
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+{posts} posts</span>
          </section>
          <section className={styles.box}>
            <span>+{comments} comentários</span>
          </section>
        </div>
      </main>
    </div>
  );
}
