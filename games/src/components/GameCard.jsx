import React from "react";
import styles from "../Styles/GameCard.module.css";
const GameCard = ({ data }) => {
  return (
    <div className={styles.cardContainer}>
      {data.title}
      {/* <img src={data.image} alt="" /> */}
    </div>
  );
};

export default GameCard;
