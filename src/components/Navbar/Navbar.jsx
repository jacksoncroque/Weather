import { SearchIcon } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useGlobalContext } from "@/contexts/GlobalContext";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const { state, handleSearchInputChange, handleSearchInputClick } = useGlobalContext();

  return (
    <div className={styles.container}>
      <div className={styles.containerWrapper}>
        <div className={styles.containerWrapperTitle}>
          <img src="./logo.png" alt="Weather App" aria-label="Weather App" />
          <h1>Weather App</h1>
        </div>
        <nav className={styles.containerWrapperNav}>
          <input
            type="text"
            name="searchInput"
            title="Pesquisar cidade"
            aria-label="Pesquisar cidade"
            placeholder="Pesquisar cidade..."
            value={state.inputValue}
            onChange={handleSearchInputChange}
          />
          <button onClick={handleSearchInputClick}>
            <SearchIcon size={25}/>
          </button>
        </nav>
        <ul className={styles.containerWrapperList}>
          <li>
            <a
              href="https://github.com/jacksoncroque"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
          </li>
          <li>
            <a
              href="http://linkedin.com/in/jacksoncrq"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
