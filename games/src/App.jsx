import "./App.css";
import Home from "./components/Home";

import { GamesContextProvider } from "./context/GamesContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <GamesContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/Games/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </GamesContextProvider>
  );
}

export default App;
