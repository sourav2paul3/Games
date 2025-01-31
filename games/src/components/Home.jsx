import React, { useContext } from "react";
import { Navbar } from "./Navbar";
import Tabs from "./Tabs";
import GameCard from "./GameCard";
import styles from "../Styles/Home.module.css";
import { GamesContext } from "../context/GamesContext.jsx";
const Home = () => {
  const { filteredGames, currentTab } = useContext(GamesContext);

  return (
    <div>
      <Navbar />
      <Tabs />
      <div className={styles.gameCardContainer}>
        {currentTab === "allGames"
          ? filteredGames.map((data, index) => (
              <GameCard key={index} data={data} />
            ))
          : filteredGames
              .filter((data) => data.favourite)
              .map((data, index) => <GameCard key={index} data={data} />)}
      </div>
    </div>
  );
};

export default Home;
