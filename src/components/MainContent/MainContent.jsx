import Hero from "../Hero/Hero";
import HourlyForecast from "./HourlyForecast/HourlyForecast";
import TenForecast from "./TenForecast/TenForecast";

import styles from "./MainContent.module.scss";
import UvIndex from "./UvIndex/UvIndex";

const forecast = [
  {
    id: 1,
    hour: "Now",
    icon: "/public/forecastIcons/rainy.svg",
    temperature: "18°",
  },
  {
    id: 2,
    hour: "15:00",
    icon: "/public/forecastIcons/rainy.svg",
    temperature: "18°",
  },
  {
    id: 3,
    hour: "16:00",
    icon: "/public/forecastIcons/rainy.svg",
    temperature: "17°",
  },
  {
    id: 4,
    hour: "17:00",
    icon: "/public/forecastIcons/cloudy.svg",
    temperature: "17°",
  },
  {
    id: 5,
    hour: "18:00",
    icon: "/public/forecastIcons/cloudy.svg",
    temperature: "16°",
  },
  {
    id: 6,
    hour: "19:00",
    icon: "/public/forecastIcons/rainy.svg",
    temperature: "16°",
  },
  {
    id: 7,
    hour: "20:00",
    icon: "/public/forecastIcons/cloudy_night.svg",
    temperature: "15°",
  },
  {
    id: 8,
    hour: "21:00",
    icon: "/public/forecastIcons/cloudy_night.svg",
    temperature: "14°",
  },
];

const tenDayForecast = [
  {
    id: 1,
    day: "Today",
    icon: "/public/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 2,
    day: "Today",
    icon: "/public/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 3,
    day: "Today",
    icon: "/public/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 4,
    day: "Today",
    icon: "/public/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 5,
    day: "Today",
    icon: "/public/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 6,
    day: "Today",
    icon: "/public/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 7,
    day: "Today",
    icon: "/public/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 8,
    day: "Today",
    icon: "/public/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 9,
    day: "Today",
    icon: "/public/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 10,
    day: "Today",
    icon: "/public/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
];

const MainContent = () => {
  return (
    <div className={styles.container}>
      <Hero />

      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperMain}>
          <HourlyForecast forecast={forecast} />
        </div>
        <div className={styles.containerWrapperAside}>
          <TenForecast tenDayForecast={tenDayForecast} />
        </div>
        <div className={styles.containerWrapperUv}>
          <UvIndex />
        </div>
        <div className={styles.containerWrapperWind}>kk</div>
        <div className={styles.containerWrapperHumidity}>kk</div>
        <div className={styles.containerWrapperVisibility}>kk</div>
        <div className={styles.containerWrapperPressure}>kk</div>
        <div className={styles.containerWrapperRain}>kk</div>
      </div>
    </div>
  );
};

export default MainContent;
