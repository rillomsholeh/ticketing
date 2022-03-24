import Link from "next/link";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>Copyriight &copy; Event Ticketing 2022</p>
      <p>
        <Link href="/about">Abut this project</Link>
      </p>
    </footer>
  );
}
