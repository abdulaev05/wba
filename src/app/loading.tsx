import React from 'react';
import styles from '@/styles/pages/loading.module.scss';

const Loading = () => {
  return (
    <main className={styles.loader}>
      <span className={styles.spinner}></span>
    </main>
  );
};

export default Loading;
