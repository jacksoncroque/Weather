import Hero from "../Hero/Hero";
import HourlyForecast from "../HourlyForecast/HourlyForecast";

import styles from "./MainContent.module.scss";

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

const MainContent = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <HourlyForecast forecast={forecast} />
    </div>
  );
};

export default MainContent;
