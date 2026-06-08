import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperDate}>
          <p>
            Developed by{" "}
            <a
              href="https://jacksoncoelho-web-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Jackson</em>
            </a>{" "}
            | Weather data from{" "}
            <a
              href="https://www.weatherapi.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Weather API</em>
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
