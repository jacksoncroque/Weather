import { Thermometer } from "lucide-react";

import { useGlobalContext } from "../../../contexts/GlobalContext";

import styles from "./Pressure.module.scss";

const Pressure = () => {
  const {
    state: { currentForecast },
  } = useGlobalContext();

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <Thermometer /> PRESSÃO
          </h3>
          <p>
            {currentForecast?.current.pressure ?? "-"} <span>mbar</span>
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
