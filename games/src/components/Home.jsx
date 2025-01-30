import React from "react";
import { Navbar } from "./Navbar";
import Tabs from "./Tabs";
import GameCard from "./GameCard";
import { Gamedata } from "../GameData/GameData.js";
import styles from "../Styles/Home.module.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Tabs />
      <div className={styles.gameCardContainer}>
        {Gamedata.map((data, index) => (
          <GameCard key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
