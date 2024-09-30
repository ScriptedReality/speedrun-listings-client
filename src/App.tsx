import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Leaderboard from "./pages/Leaderboard";
import { MantineProvider } from "@mantine/core";

function App() {
  return (
    <>
      <MantineProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Leaderboard />} />
          </Routes>
        </Router>
      </MantineProvider>
    </>
  );
}

export default App;
