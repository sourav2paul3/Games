import { createContext, useState } from "react";

export const GamesContext = createContext("");

export const GamesContextProvider = ({ children }) => {
  const [searchedGame, setSearchedGame] = useState("");

  return (
    <GamesContext.Provider value={{ searchedGame, setSearchedGame }}>
      {children}
    </GamesContext.Provider>
  );
};
