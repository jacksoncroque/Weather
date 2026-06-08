import { ClipLoader } from "react-spinners";

import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div>
          <div style={{ width: 80 }}>
            <ClipLoader color="#000" size={50}/>
          </div>
          <div>
            Carregando
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
