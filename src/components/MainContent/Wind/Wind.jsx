import { WindIcon } from "lucide-react";
import styles from "./Wind.module.scss";

const Wind = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <h3>
            <WindIcon /> VENTO
          </h3>
          <p>
            15 <span>Km/h</span>
          </p>
        </div>
        <div className={styles.containerWrapperSubtitle}>
          <p>Rajadas de até 22Km/h.</p>
        </div>
      </div>
    </div>
  );
};

export default Wind;
