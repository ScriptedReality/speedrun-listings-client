import cx from "clsx";
import { useState } from "react";
import { Table, ScrollArea } from "@mantine/core";
import classes from "../styles/TableScrollArea.module.css";
import "@mantine/core/styles.css";

interface LeaderboardEntry {
  name: string;
  score: number;
  date: Date;
}

const data: LeaderboardEntry[] = [
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

const sortByHighestScore = (data: LeaderboardEntry[]) => {
  return data.sort((a, b) => b.score - a.score);
};
const sortedData = sortByHighestScore(data);

export function TableScrollArea() {
  const [scrolled, setScrolled] = useState(false);

  const rows = sortedData.map((row) => (
    <Table.Tr key={row.name}>
      <Table.Td>{row.name}</Table.Td>
      <Table.Td>{row.score}</Table.Td>
      <Table.Td>{row.date.toLocaleDateString()}</Table.Td>
    </Table.Tr>
  ));

  return (
    <ScrollArea
      h={1000}
      onScrollPositionChange={({ y }) => setScrolled(y !== 0)}
    >
      <Table miw={700}>
        <Table.Thead
          className={cx(classes.header, { [classes.scrolled]: scrolled })}
        >
          <Table.Tr>
            <Table.Th>Name</Table.Th>
            <Table.Th>Score</Table.Th>
            <Table.Th>Email</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody className={classes.body}>{rows}</Table.Tbody>
      </Table>
    </ScrollArea>
  );
}
