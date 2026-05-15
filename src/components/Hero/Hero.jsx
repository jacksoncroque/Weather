import { DropletIcon } from "lucide-react";
import { CiWarning } from "react-icons/ci";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <h1>São Paulo</h1>
        <div className={styles.containerWrapperTemperature}>
          <h2>18°</h2>
          <div className={styles.containerWrapperTemperatureDetails}>
            <h4>Moderate rain</h4>
            <p>H:21° L:16°</p>
          </div>
        </div>
        <div className={styles.containerWrapperWarning}>
          <span>
            <DropletIcon size={20}/> Preciptation: 85%
          </span>
          <span>
            <CiWarning size={20}/> Flood Warning
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
