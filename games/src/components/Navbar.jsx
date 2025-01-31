import { useContext } from "react";
import styles from "../Styles/Navbar.module.css";
import { IoSearch } from "react-icons/io5";
import { GamesContext } from "../context/GamesContext";
import { RiResetLeftLine } from "react-icons/ri";
export function Navbar() {
  const { searchedGame, setSearchedGame, handleReset } =
    useContext(GamesContext);
  return (
    <div className={styles.navBarContainer}>
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
      <RiResetLeftLine
        size={25}
        className={styles.resetIcon}
        onClick={handleReset}
      />
    </div>
  );
}
