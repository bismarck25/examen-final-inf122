import styles from "./page.module.css";
import Foto from "./components/pokemon";

export default function Home() {
  return (
    <div className={styles.main}>
      
      <Foto/>
      
    </div>
  );
}
