import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
      <main className={styles.main}>
        <h1>Página HOME</h1>
        <span>Usando api routes</span>
      </main>
  );
}
