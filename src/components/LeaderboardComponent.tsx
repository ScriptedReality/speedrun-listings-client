import cx from "clsx";
import { useState } from "react";
import { Table, ScrollArea } from "@mantine/core";
import classes from "../styles/TableScrollArea.module.css";
import "@mantine/core/styles.css";

export interface LeaderboardEntry {
  name: string;
  score: number;
  date: Date;
}

export function TableScrollArea({entries}: {entries: LeaderboardEntry[]}) {

  const [scrolled, setScrolled] = useState(false);

  const sortByHighestScore = (data: LeaderboardEntry[]) => {
    return data.sort((a, b) => b.score - a.score);
  };
  const sortedData = sortByHighestScore(entries);

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
