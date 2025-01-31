import React, { useContext } from "react";
import { Navbar } from "./Navbar";
import Tabs from "./Tabs";
import GameCard from "./GameCard";
import styles from "../Styles/Home.module.css";
import { GamesContext } from "../context/GamesContext.jsx";
const Home = () => {
  const { allGames, currentTab } = useContext(GamesContext);
  const handleCardClick = () => {
    window.location.href = "https://google.com";
  };
  return (
    <div>
      <Navbar />
      <Tabs />
      <div className={styles.gameCardContainer} onClick={handleCardClick}>
        {currentTab === "allGames"
          ? allGames.map((data, index) => <GameCard key={index} data={data} />)
          : allGames.map((data, index) =>
              data.favourite ? <GameCard key={index} data={data} /> : null
            )}
      </div>
    </div>
  );
};

export default Home;
