import React, { useContext } from "react";
import styles from "../Styles/Tabs.module.css";
import { GamesContext } from "../context/GamesContext";

const Tabs = () => {
  const { currentTab, setCurrentTab } = useContext(GamesContext);
  return (
    <div className={styles.tabContainer}>
      <h1
        className={`${styles.tabsHeader} ${
          currentTab === "allGames" ? styles.activeTab : ""
        }`}
        onClick={() => setCurrentTab("allGames")}
      >
        All Games
      </h1>
      <h1
        className={`${styles.tabsHeader} ${
          currentTab === "favGames" ? styles.activeTab : ""
        }`}
        onClick={() => setCurrentTab("favGames")}
      >
        Favourite Games
      </h1>
    </div>
  );
};

export default Tabs;
