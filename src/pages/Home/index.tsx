import "normalize.css";

import styles from "./Home.module.scss";
import Header from 'components/Header';
import Main from "components/Main";

export default function Home() {
  return (
    <div className={styles.home}>
      <Header />
      <Main />
    </div>
  );
}
