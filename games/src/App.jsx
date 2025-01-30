import "./App.css";
import { Navbar } from "./components/Navbar";
import { GamesContextProvider } from "./context/GamesContext";

function App() {
  return (
    <div>
      <GamesContextProvider>
        <Navbar />
      </GamesContextProvider>
    </div>
  );
}

export default App;
