import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperDate}>
          <p>
            Developed by{" "}
            <a
              href="https://github.com/jacksoncroque"
              target="_blank"
              rel="noopener noreferrer"
            >
              <em>Jackson</em>
            </a>{" "}
            | Weather data from OpenWeather
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
