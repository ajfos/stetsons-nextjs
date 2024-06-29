import { useEffect } from "react";
import styles from "../styles/Redirectpage.module.scss";

export default function Szechuan() {
  useEffect(() => {
    location.replace("https://hypeddit.com/szechuan-chicken");
  }, []);

  return (
    <div className={styles.page}>
      <div>Heading to the home of Szechuan...</div>
      <div>
        If nothing happens, try clicking{" "}
        <a href="https://hypeddit.com/szechuan-chicken" className={styles.link}>
          here.
        </a>
      </div>
    </div>
  );
}
