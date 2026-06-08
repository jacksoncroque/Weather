import { Calendar } from "lucide-react";

import { useGlobalContext } from "../../../contexts/GlobalContext";

import styles from "./TenForecast.module.scss";

const TenForecast = () => {
  const {
    state: { tenDayForecast },
  } = useGlobalContext();

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <h3>
          <Calendar size={20} /> Previsão para os próximos 10 dias.
        </h3>
        <div className={styles.containerWrapperDays}>
          {tenDayForecast.map((item) => {
            return (
              <div key={item.id} className={styles.containerWrapperDaysWeek}>
                <p>
                  {String(item.dayOfWeek).charAt(0).toUpperCase() +
                    item.dayOfWeek.slice(1)}
                </p>
                <img src={item.icon} alt="" />
                <p>{Math.ceil(item.minTemp)}°</p>
                <span></span>
                <p>{Math.ceil(item.maxTemp)}°</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TenForecast;
