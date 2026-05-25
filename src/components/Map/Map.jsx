import { ThermometerSnowflake } from "lucide-react";

import { useGlobalContext } from "../../contexts/GlobalContext";

import styles from "./Map.module.scss";

const Map = () => {
  const {
    state: { currentForecast },
  } = useGlobalContext();

  const getFeelsLikeMessage = (contextInfo) => {
    if (!contextInfo) return "-";

    const wind = contextInfo.current.wind;
    const feelsLike = contextInfo.current.feelsLike;
    const temperature = contextInfo.mainInfo.temperature;
    const humidity = contextInfo.current.humidity;

    if (wind > 25 && feelsLike < temperature) {
      return "O vento está baixando a sensação térmica.";
    }

    if (humidity > 80 && feelsLike > temperature) {
      return "A umidade está aumentando a sensação de calor.";
    }

    if (feelsLike >= 30) {
      return "Sensação de calor intensa.";
    }

    if (feelsLike <= 5) {
      return "Sensação de frio acentuada.";
    }

    return "Clima relativamente confortável no momento.";
  };

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <ThermometerSnowflake /> SENSAÇÃO
          </h3>
          <p>{Math.ceil(currentForecast?.current.feelsLike) ?? "-"}°</p>
        </div>
        <div className={styles.containerWrapperSubtitle}>
          <p>{getFeelsLikeMessage(currentForecast)}</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
