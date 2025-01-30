import React from "react";
import styles from "../Styles/GameCard.module.css";

const GameCard = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      <div>
        <img src={data.image} alt="" className={styles.imageContainer} />
      </div>
      <div>{data.title}</div>
    </div>
  );
};

export default GameCard;
