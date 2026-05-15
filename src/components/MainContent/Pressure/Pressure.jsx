import { Thermometer } from "lucide-react";
import styles from "./Pressure.module.scss";

const Pressure = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <Thermometer /> PRESSÃO
          </h3>
          <p>
            1.016 <span>mbar</span>
          </p>
        </div>
        <div className={styles.containerWrapperSubtitle}>
          <p>Estável pelas últimas 3h.</p>
        </div>
      </div>
    </div>
  );
};

export default Pressure;
