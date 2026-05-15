import { Calendar } from "lucide-react";
import styles from "./TenForecast.module.scss";

const TenForecast = ({ tenDayForecast }) => {
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
                <p>{item.day}</p>
                <img src={item.icon} alt="" />
                <p>{item.t1}--</p>
                <p>--{item.t2}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TenForecast;
