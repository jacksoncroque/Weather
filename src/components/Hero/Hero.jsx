import { useEffect } from "react";
import { DropletIcon } from "lucide-react";
import { CiWarning } from "react-icons/ci";

import { useGlobalContext } from "../../contexts/GlobalContext";

import styles from "./Hero.module.scss";

const Hero = () => {
  const {
    state: { currentForecast },
  } = useGlobalContext();

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <h1>{currentForecast?.mainInfo.city ?? "-"}</h1>
        <div className={styles.containerWrapperTemperature}>
          <h2>
            {Math.ceil(currentForecast?.mainInfo.temperature ?? 0) || "-"}°
          </h2>
          <div className={styles.containerWrapperTemperatureDetails}>
            <h4>{currentForecast?.mainInfo.condition ?? "-"}</h4>
            <p>
              {currentForecast
                ? `Mín.: ${Math.ceil(currentForecast?.mainInfo.minTemp ?? 0)}° Max.: ${Math.ceil(currentForecast?.mainInfo.highTemp ?? 0)}°`
                : "-"}
            </p>
          </div>
        </div>
        <div className={styles.containerWrapperWarning}>
          <span>
            <DropletIcon size={20} color="white" />
            {`Preciptação: ${Math.ceil(currentForecast?.mainInfo.preciptation ?? 0) || "0"}`}
          </span>
          {currentForecast?.mainInfo.alertEvent ? (
            <span>
              <CiWarning size={20} />{" "}
              {currentForecast?.mainInfo.alertEvent ?? null}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
