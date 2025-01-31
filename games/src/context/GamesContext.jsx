import { createContext, useState, useEffect } from "react";
import { Gamedata } from "../GameData/GameData.js";

export const GamesContext = createContext("");

export const GamesContextProvider = ({ children }) => {
  const [searchedGame, setSearchedGame] = useState("");
  const [currentTab, setCurrentTab] = useState("allGames");
  const [allGames, setAllGames] = useState(() => {
    try {
      const games = localStorage.getItem("games");
      const parsedGames = games ? JSON.parse(games) : Gamedata;
      return Array.isArray(parsedGames) ? parsedGames : Gamedata;
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return Gamedata;
    }
  });
  useEffect(() => {
    localStorage.setItem("games", JSON.stringify(allGames));
  }, [allGames]);

  const handleCardClick = ({ title, url }) => {
    setAllGames((prevGames) =>
      prevGames.map((game) =>
        game.title === title ? { ...game, lastPlayed: Date.now() } : game
      )
    );

    setTimeout(() => {
      window.location.href = { url };
    }, 100);
  };

  const setFav = (title) => {
    setAllGames((prevGames) =>
      prevGames.map((game) =>
        game.title === title ? { ...game, favourite: !game.favourite } : game
      )
    );
  };

  return (
    <GamesContext.Provider
      value={{
        handleCardClick,
        searchedGame,
        setSearchedGame,
        currentTab,
        setCurrentTab,
        allGames,
        setAllGames,
        setFav,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};
