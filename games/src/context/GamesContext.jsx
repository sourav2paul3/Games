import { createContext, useState } from "react";

export const GamesContext = createContext("");

export const GamesContextProvider = ({ children }) => {
  const [searchedGame, setSearchedGame] = useState("");
  const [currentTab, setCurrentTab] = useState("allGames");

  return (
    <GamesContext.Provider
      value={{ searchedGame, setSearchedGame, currentTab, setCurrentTab }}
    >
      {children}
    </GamesContext.Provider>
  );
};
