import { Eye } from "lucide-react";
import styles from "./Visibility.module.scss";

const Visibility = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <Eye /> VISIBILIDADE
          </h3>
          <p>
            30 <span>Km</span>
          </p>
        </div>
        <div className={styles.containerWrapperSubtitle}>
          <p>Visibilidade excelente</p>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
