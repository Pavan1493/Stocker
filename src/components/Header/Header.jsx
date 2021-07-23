import React from "react";
import { ReactComponent as Icon} from "../../assets/icons/images.jpg";
import styles from "./Header.module.css";
import { ReactComponent as Logo } from "../../assets/icons/chart-line.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoContainer}>
          <Logo className={styles.logo} />
          <span>Stalker</span>
        </Link>
        <a href="http://localhost:3001" className={styles.logoContainer}>
          Check Crypto
        </a>

        <div className={styles.userContainer}>
          <div className={styles.logo}>Team 6</div>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
