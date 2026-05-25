import { Sun } from "lucide-react";

import styles from "./UvIndex.module.scss";
import { useGlobalContext } from "../../../contexts/GlobalContext";

const UvIndex = () => {
  const {
    state: { currentForecast },
  } = useGlobalContext();

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <Sun /> ÍNDICE UV
          </h3>
          <p>
            {currentForecast?.current.uvIndex ?? "-"} <span></span>
          </p>
        </div>
        <div className={styles.containerWrapperSubtitle}>
          <p>Baixo no restante do dia</p>
        </div>
      </div>
    </div>
  );
};

export default UvIndex;
