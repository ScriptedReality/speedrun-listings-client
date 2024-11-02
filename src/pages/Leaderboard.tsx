import { useState } from "react";
import { Grid, SegmentedControl } from "@mantine/core";
import "../styles/LeaderboardPage.css";
import "@mantine/core/styles.css";

import LeaderboardEntryCard from "../components/LeaderboardEntryCard";
import LeaderboardTitle from "../components/LeaderboardTitle";

const data = [
  {
    name: "Athena Weissnat",
    score: 1000000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Deangelo Runolfsson",
    score: 900002,
    date: new Date("2024-02-20"),
  },
  {
    name: "Danny Carter",
    score: 900001,
    date: new Date("2024-02-20"),
  },
  {
    name: "Trace Tremblay PhD",
    score: 900000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Derek Dibbert",
    score: 900007,
    date: new Date("2024-02-20"),
  },
  {
    name: "Viola Bernhard",
    score: 800000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Austin Jacobi",
    score: 700000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Hershel Mosciski",
    score: 600000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Mylene Ebert",
    score: 500000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Lou Trantow",
    score: 400000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Dariana Weimann",
    score: 300000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Dr. Christy Herman",
    score: 200000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Katelin Schuster",
    score: 100000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Melyna Macejkovic",
    score: 10000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Pinkie Rice",
    score: 1000,
    date: new Date("2024-02-20"),
  },
  {
    name: "Brain Kreiger",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Myrtice McGlynn",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Chester Carter PhD",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Mrs. Ericka Bahringer",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Korbin Buckridge Sr.",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Dr. Daisy Becker",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Derrick Buckridge Sr.",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Ernie Hickle",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Jewell Littel",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Cyrus Howell",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Dr. Orie Jast",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Luisa Murphy",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Lea Witting",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Kelli Runolfsson",
    score: 100,
    date: new Date("2024-02-20"),
  },
  {
    name: "Brook Gaylord",
    score: 100,
    date: new Date("2024-02-20"),
  },
];

const Leaderboard = () => {
  const [leaderboardData, setLeaderboardData] = useState(data);
  const [filter, setFilter] = useState("All Time");

  const filterScores = (filter: string) => {
    let filteredData;
    const now = new Date();
    switch (filter) {
      case "Today":
        filteredData = data.filter(
          (entry) => entry.date.toDateString() === now.toDateString()
        );
        break;
      case "This week":
        const weekAgo = new Date(now);
        weekAgo.setDate(now.getDate() - 7);
        filteredData = data.filter((entry) => entry.date >= weekAgo);
        break;
      case "This Month":
        const monthAgo = new Date(now);
        monthAgo.setMonth(now.getMonth() - 1);
        filteredData = data.filter((entry) => entry.date >= monthAgo);
        break;
      case "This Year":
        const yearAgo = new Date(now);
        yearAgo.setFullYear(now.getFullYear() - 1);
        filteredData = data.filter((entry) => entry.date >= yearAgo);
        break;
      default:
        filteredData = data;
    }

    setLeaderboardData(filteredData);
  };

  return (
    <div className="leaderboard-page">
      <div className="leaderboard-container">
        <LeaderboardTitle />
        <div className="leaderboard-filter">
          <Grid justify="center">
            <Grid.Col span="content" mt={"2rem"}>
              <SegmentedControl
                value={filter}
                onChange={(value) => {
                  setFilter(value);
                  filterScores(value);
                }}
                color="blue"
                data={[
                  { label: "Today", value: "Today" },
                  { label: "This week", value: "This week" },
                  { label: "This Month", value: "This Month" },
                  { label: "This Year", value: "This Year" },
                  { label: "All Time", value: "All Time" },
                ]}
              />
            </Grid.Col>
          </Grid>
        </div>
        <LeaderboardEntryCard leaderboardData={leaderboardData} />
      </div>
    </div>
  );
};

export default Leaderboard;
