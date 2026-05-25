import { DropletsIcon } from "lucide-react";

import { useGlobalContext } from "../../../contexts/GlobalContext";

import styles from "./Humidity.module.scss";

const Humidity = () => {
  const {
    state: { currentForecast },
  } = useGlobalContext();

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <DropletsIcon /> UMIDADE
          </h3>
          <p>
            {currentForecast?.current.humidity ?? "-"} <span>%</span>
          </p>
        </div>
        <div className={styles.containerWrapperSubtitle}>
          <p>
            O ponto de orvalho é de{" "}
            {Math.ceil(currentForecast?.current.dewPoint) ?? "-"}° agora
          </p>
        </div>
      </div>
    </div>
  );
};

export default Humidity;
