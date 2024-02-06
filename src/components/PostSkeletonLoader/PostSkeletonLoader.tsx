import styles from "./PostSkeletonLoader.module.scss";

function PostSkeletonLoader() {
  return (
    <section className={styles.loader}>

      <div className={styles.infoWrapper}>
        <div className={styles.userPic}></div>

        <div className={styles.info}>
          <div className={styles.name}></div>
          <div className={styles.time}></div>
        </div>
      </div>

      <div className={styles.description1}></div>
      <div className={styles.description2}></div>

      <div className={styles.code}></div>
    </section>
  );
}
export default PostSkeletonLoader;
