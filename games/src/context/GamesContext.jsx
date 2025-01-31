import { createContext, useState } from "react";
import { Gamedata } from "../GameData/GameData.js";
export const GamesContext = createContext("");

export const GamesContextProvider = ({ children }) => {
  const [searchedGame, setSearchedGame] = useState("");
  const [currentTab, setCurrentTab] = useState("allGames");
  const [allGames, setAllGames] = useState(Gamedata);

  function setFav(title) {
    setAllGames((prevGames) =>
      prevGames.map((game) =>
        game.title === title ? { ...game, favourite: !game.favourite } : game
      )
    );
  }

  return (
    <GamesContext.Provider
      value={{
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
