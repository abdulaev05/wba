import styles from '@/styles/pages/error.module.scss';
import btn from '@/styles/components/ui/buttons.module.scss';
import Link from 'next/link';

const notFound = () => {
  return (
    <main className={styles.error}>
      <div className="container">
        <div className={styles.container}>
          <div className={styles.text}>
            <h1 className={styles.title}>404</h1>
            <h3 className={styles.subtitle}>Page not found</h3>
          </div>
          <Link href="/" className={`${btn.btn} ${styles.home_btn}`}>
            Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default notFound;
