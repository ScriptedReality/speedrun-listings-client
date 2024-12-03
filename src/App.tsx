import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import { MantineProvider } from "@mantine/core";
import LandingPage from "./pages/LandingPage.tsx";
import "@mantine/core/styles.css";
import { HeaderSimple } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";
import "./App.css";
import { Notifications } from "@mantine/notifications"
import '@mantine/notifications/styles.css';

function App() {
  return (
    <MantineProvider>
      <Notifications /> 
      <Router>
        <div className="sticky-header">
          <HeaderSimple />
        </div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </Router>
      <Footer />
    </MantineProvider>
  );
}

export default App;
