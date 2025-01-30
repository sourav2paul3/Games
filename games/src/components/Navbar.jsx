import { useContext } from "react";
import styles from "../Styles/Navbar.module.css";
import { IoSearch } from "react-icons/io5";
import { GamesContext } from "../context/GamesContext";
export function Navbar() {
  const { searchedGame, setSearchedGame } = useContext(GamesContext);
  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search game..."
        className={styles.searchBox}
        value={searchedGame}
        onChange={(event) => {
          setSearchedGame(event.target.value);
        }}
      />
      <IoSearch size={25} className={styles.searchIcon} />
    </div>
  );
}
