import React, { useContext } from "react";
import styles from "../Styles/Tabs.module.css";
import { GamesContext } from "../context/GamesContext";

const Tabs = () => {
  const { currentTab, setCurrentTab } = useContext(GamesContext);
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabs}>
        <div
          className={`${styles.tab} ${
            currentTab === "allGames" ? styles.activeTab : ""
          }`}
          onClick={() => setCurrentTab("allGames")}
        >
          All Games
        </div>
        <div
          className={`${styles.tab} ${
            currentTab === "favGames" ? styles.activeTab : ""
          }`}
          onClick={() => setCurrentTab("favGames")}
        >
          Favourite Games
        </div>
      </div>
    </div>
  );
};

export default Tabs;
