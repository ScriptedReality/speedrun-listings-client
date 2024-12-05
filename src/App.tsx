import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import { MantineProvider } from "@mantine/core";
import LandingPage from "./pages/LandingPage.tsx";
import GamePage from "./pages/GamePage";
import "@mantine/core/styles.css";
import { HeaderSimple } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import "./App.css";

function App() {
  return (
    <MantineProvider>
      <Router>
        <div className="sticky-header">
          <HeaderSimple />
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/games" element={<GamePage />} />
        </Routes>
      </Router>
      <Footer />
    </MantineProvider>
  );
}

export default App;
