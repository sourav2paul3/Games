import { createContext, useState } from "react";

export const GamesContext = createContext("");

export const GamesContextProvider = ({ children }) => {
  const [searchedGame, setSearchedGame] = useState("");
  const [currentTab, setCurrentTab] = useState("allGames");
  const [allGames, setAllGames] = useState([]);
  const [favGames, setFavGames] = useState([]);

  return (
    <GamesContext.Provider
      value={{
        searchedGame,
        setSearchedGame,
        currentTab,
        setCurrentTab,
        allGames,
        setAllGames,
        favGames,
        setFavGames,
      }}
    >
      {children}
    </GamesContext.Provider>
  );
};
