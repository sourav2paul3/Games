import React from "react";
import styles from "../Styles/Tabs.module.css";

const Tabs = () => {
  return (
    <div className={styles.tabContainer}>
      <h1 className={styles.tabsHeader}>All Games</h1>
      <h1 className={styles.tabsHeader}>Favourite Games</h1>
    </div>
  );
};

export default Tabs;
