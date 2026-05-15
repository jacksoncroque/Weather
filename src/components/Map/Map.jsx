import { MapIcon } from "lucide-react";
import styles from "./Map.module.scss";

const Map = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <MapIcon /> MAPA DA CHUVA
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Map;
