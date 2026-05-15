import { DropletsIcon } from "lucide-react";
import styles from "./Humidity.module.scss";

const Humidity = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <DropletsIcon /> UMIDADE
          </h3>
          <p>
            69 <span>%</span>
          </p>
        </div>
        <div className={styles.containerWrapperSubtitle}>
          <p>O ponto de orvalho é de 10° agora</p>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
