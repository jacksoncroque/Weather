import { MdOutlineWatchLater } from "react-icons/md";

import styles from "./HourlyForecast.module.scss";
import { useGlobalContext } from "../../../contexts/GlobalContext";
import { useEffect } from "react";

const HourlyForecast = () => {
  const {
    state: { currentForecast },
  } = useGlobalContext();

  useEffect(() => {
    console.log(currentForecast);
  }, [currentForecast]);

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <h3>
          <MdOutlineWatchLater /> Condições climáticas das próximas horas
        </h3>
        <div className={styles.containerWrapperClimate}>
          {(currentForecast?.forecast ?? []).map((item) => {
            return (
              <span key={item.id}>
                <p>{item.hour}</p>
                <img src={item.icon} alt="" />
                <h6>{item.temperature}</h6>
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
