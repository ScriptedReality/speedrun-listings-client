import { TableScrollArea } from "../components/LeaderboardComponent";
import "../styles/TableScrollArea.module.css";
import "../styles/LeaderboardPage.css";

const Leaderboard = () => {
  return (
    <div className="leaderboard-container">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <TableScrollArea />
    </div>
  );
};

export default Leaderboard;
