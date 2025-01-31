import React, { useContext } from "react";
import styles from "../Styles/GameCard.module.css";
import { FaBookmark } from "react-icons/fa";
import { GamesContext } from "../context/GamesContext";

const GameCard = ({ data }) => {
  const { setFav } = useContext(GamesContext);
  return (
    <div
      className={styles.cardContainer}
      style={{ background: `${data.bgColour}` }}
    >
      <div className={styles.imageContainer}>
        <img src={data.image} alt="" className={styles.image} />
      </div>
      <div>
        <p className={styles.header}>{data.title}</p>
        <p className={styles.lastPlayed}>
          Last Played:
          {data.lastPlayed
            ? new Date(data.lastPlayed).toLocaleString()
            : "Never"}
        </p>
      </div>
      <div className={styles.gameDetailsContainer}>
        <FaBookmark
          size={25}
          className={`${styles.bookmarkIcon} ${
            data.favourite ? styles.active : styles.inactive
          }`}
          onClick={() => {
            setFav(data.title);
          }}
        />
      </div>
    </div>
  );
};

export default GameCard;
