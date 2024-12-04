import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import { MantineProvider } from "@mantine/core";
import LandingPage from "./app/page.tsx";
import "@mantine/core/styles.css";
import { Footer } from "./components/Footer.tsx";
import "./App.css";

function App() {
  return (
    <MantineProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
