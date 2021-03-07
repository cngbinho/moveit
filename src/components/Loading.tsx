import styles from '../styles/components/Loading.module.css';

export function Loading() {
  return (
    <div className={styles.load}>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
      <div className={styles.dot}></div>
    </div>
  );
}