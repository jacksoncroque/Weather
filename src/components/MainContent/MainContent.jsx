import { useEffect } from "react";

import { getForecast, getFutureForecast } from "../../services/forecast";

import Hero from "../Hero/Hero";
import HourlyForecast from "./HourlyForecast/HourlyForecast";
import TenForecast from "./TenForecast/TenForecast";
import UvIndex from "./UvIndex/UvIndex";
import Wind from "./Wind/Wind";
import Humidity from "./Humidity/Humidity";
import Visibility from "./Visibility/Visibility";
import Pressure from "./Pressure/Pressure";
import Map from "../Map/Map";

import styles from "./MainContent.module.scss";

const forecast = [
  {
    id: 1,
    hour: "Now",
    icon: "/forecastIcons/rainy.svg",
    temperature: "18°",
  },
  {
    id: 2,
    hour: "15:00",
    icon: "/forecastIcons/rainy.svg",
    temperature: "18°",
  },
  {
    id: 3,
    hour: "16:00",
    icon: "/forecastIcons/rainy.svg",
    temperature: "17°",
  },
  {
    id: 4,
    hour: "17:00",
    icon: "/forecastIcons/cloudy.svg",
    temperature: "17°",
  },
  {
    id: 5,
    hour: "18:00",
    icon: "/forecastIcons/cloudy.svg",
    temperature: "16°",
  },
  {
    id: 6,
    hour: "19:00",
    icon: "/forecastIcons/rainy.svg",
    temperature: "16°",
  },
  {
    id: 7,
    hour: "20:00",
    icon: "/forecastIcons/cloudy_night.svg",
    temperature: "15°",
  },
  {
    id: 8,
    hour: "21:00",
    icon: "/forecastIcons/cloudy_night.svg",
    temperature: "14°",
  },
];

const tenDayForecast = [
  {
    id: 1,
    day: "Today",
    icon: "/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 2,
    day: "Today",
    icon: "/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 3,
    day: "Today",
    icon: "/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 4,
    day: "Today",
    icon: "/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 5,
    day: "Today",
    icon: "/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 6,
    day: "Today",
    icon: "/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 7,
    day: "Today",
    icon: "/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 8,
    day: "Today",
    icon: "/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 9,
    day: "Today",
    icon: "/forecastIcons/cloudy_night.svg",
    t1: "16°",
    t2: "21°",
  },
  {
    id: 10,
    day: "Today",
    icon: "/forecastIcons/cloudy_night.svg",
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
          <div>
            <div>
              <HourlyForecast forecast={forecast} />
            </div>
            <div className={styles.containerWrapperMainGrid}>
              <div>
                <UvIndex />
              </div>
              <div>
                <Wind />
              </div>
              <div>
                <Humidity />
              </div>
              <div>
                <Visibility />
              </div>
              <div>
                <Pressure />
              </div>
              <div>
                <Map />
              </div>
            </div>
          </div>
          <div>
            <TenForecast tenDayForecast={tenDayForecast} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
