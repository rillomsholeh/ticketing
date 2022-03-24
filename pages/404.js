import Layout from "@/components/Layout";
import styles from "@/styles/404.module.css";
import Link from "next/link";

export default function NotFoundPage() {
  const err = "Sorry, Page Can't Be Found";
  return (
    <Layout title="Page Not Found">
      <div className={styles.error}>
        <h1>404</h1>
        <h4>{err}</h4>
        <Link href="/">Go Back</Link>
      </div>
    </Layout>
  );
}
