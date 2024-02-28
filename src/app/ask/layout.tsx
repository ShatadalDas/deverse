import { ReactNode } from "react";
import styles from "./layout.module.scss";

async function action() {
  "use server"
  await setTimeout(() => {
    console.log("Hello World")    
  }, 500);
}


async function AskLayout({ children }: { children: ReactNode }) {

  return (
    <form className={styles.askFormLayout} action={action}>
      {children}
    </form>
  );
}
export default AskLayout;
