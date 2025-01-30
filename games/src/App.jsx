import "./App.css";
import { Navbar } from "./components/Navbar";
import Tabs from "./components/Tabs";
import { GamesContextProvider } from "./context/GamesContext";

function App() {
  return (
    <div>
      <GamesContextProvider>
        <Navbar />
        <Tabs />
      </GamesContextProvider>
    </div>
  );
}

export default App;
