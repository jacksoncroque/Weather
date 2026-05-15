import { Sun } from "lucide-react";
import styles from "./UvIndex.module.scss";

const UvIndex = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <Sun /> ÍNDICE UV
          </h3>
          <p>2</p>
        </div>
        <div className={styles.containerWrapperSubtitle}>
          <p>Baixo no restante do dia</p>
        </div>
      </div>
    </div>
  );
};

export default UvIndex;
