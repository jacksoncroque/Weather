import { ThermometerSnowflake } from "lucide-react";
import styles from "./Map.module.scss";

const Map = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <ThermometerSnowflake /> SENSAÇÃO
          </h3>
          <p>10°</p>
        </div>
        <div className={styles.containerWrapperSubtitle}>
          <p>O vento está baixando a sensação térmica.</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
