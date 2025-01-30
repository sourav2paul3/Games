import React, { useContext } from "react";
import { Navbar } from "./Navbar";
import Tabs from "./Tabs";
import GameCard from "./GameCard";
import { Gamedata } from "../GameData/GameData.js";
import styles from "../Styles/Home.module.css";
import { GamesContext } from "../context/GamesContext.jsx";
const Home = () => {
  const { allGames, setAllGames } = useContext(GamesContext);
  setAllGames(Gamedata);
  return (
    <div>
      <Navbar />
      <Tabs />
      <div className={styles.gameCardContainer}>
        {allGames.map((data, index) => (
          <GameCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
