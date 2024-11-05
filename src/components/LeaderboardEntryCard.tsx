import { Grid, Card, Stack } from "@mantine/core";
import "@mantine/core/styles.css";
import ScrollAnimation from "./ScrollAnimation"
interface LeaderboardEntry {
  name: string;
  score: number;
  date: Date;
}

interface LeaderboardEntryCardProps {
  leaderboardData: LeaderboardEntry[];
}

const LeaderboardEntryCard = ({
  leaderboardData,
}: LeaderboardEntryCardProps) => {
  return (
    <Stack>
      {leaderboardData.map((item) => (
          <ScrollAnimation direction={"up"} delay={.4}>
        <Card key={item.name} shadow="sm" p="md" className="score-card">
          <Grid>
            <Grid.Col span={6}>{item.name}</Grid.Col>
            <Grid.Col span={3}>{item.score}</Grid.Col>
            <Grid.Col span={3}>{item.date.toLocaleDateString()}</Grid.Col>
          </Grid>
        </Card>
            </ScrollAnimation>
      ))}
    </Stack>
  );
};

export default LeaderboardEntryCard;
