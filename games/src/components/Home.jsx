import React, { useContext } from "react";
import { Navbar } from "./Navbar";
import Tabs from "./Tabs";
import GameCard from "./GameCard";
import styles from "../Styles/Home.module.css";
import { GamesContext } from "../context/GamesContext.jsx";
const Home = () => {
  const { allGames, currentTab } = useContext(GamesContext);
  return (
    <div>
      <Navbar />
      <Tabs />
      <div className={styles.gameCardContainer}>
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
