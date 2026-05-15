import Hero from "../Hero/Hero";

import styles from "./MainContent.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
    </div>
  );
};

export default Home;
