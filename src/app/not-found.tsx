import styles from "./not-found.module.scss";
import ButtonWrapper from "./ButtonWrapper";

function NotFound() {
  return (
    <main className={styles.main}>
      <h2 className={styles.statusCode}>404</h2>
      <p
        className={styles.funText}
      >{`Page under construction (maybe forever)`}</p>
      <ButtonWrapper className={styles.backBtn} />
    </main>
  );
}
export default NotFound;
