import { Eye } from "lucide-react";

import { useGlobalContext } from "../../../contexts/GlobalContext";

import styles from "./Visibility.module.scss";

const Visibility = () => {
  const {
    state: { currentForecast },
  } = useGlobalContext();

  const getVisibilityMessage = (contextInfo) => {
    if (!contextInfo) return "-";

    const visibility = contextInfo.current.visibility;

    if (visibility >= 10) {
      return "Visibilidade excelente";
    }

    if (visibility > 5 && visibility < 10) {
      return "A visibilidade está um pouco reduzida.";
    }

    if (visibility >= 2 && visibility <= 5) {
      return "A visibilidade está baixa.";
    }

    return "A visibilidade está severamente reduzida.";
  };
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <Eye /> VISIBILIDADE
          </h3>
          <p>
            {currentForecast?.current.visibility ?? "-"} <span>Km</span>
          </p>
        </div>
        <div className={styles.containerWrapperSubtitle}>
          <p>{getVisibilityMessage(currentForecast)}</p>
        </div>
      </div>
    </div>
  );
};

export default Visibility;
