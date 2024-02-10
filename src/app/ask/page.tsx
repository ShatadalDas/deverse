import styles from "./page.module.scss";
import FormWrapper from "./components/FormWrapper";


async function Ask() {
  return (
    <form className={styles.askForm}>
      <FormWrapper styles={styles} />
    </form>
  );
}

export default Ask;
