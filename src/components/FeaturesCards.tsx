import {
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { IconGauge, IconUser, IconCookie } from "@tabler/icons-react";
import classes from "../styles/FeaturesCards.module.css";

const mockdata = [
  {
    title: "Procedural Generation",
    description:
      "Never play the same game twice, the landscape, items, and enemies will be different every time!",
    icon: IconGauge,
  },
  {
    title: "Single and Multiplayer",
    description:
      "Play alone or with friends to see how you can do against the hordes! The more friends you add in the harder it gets!",
    icon: IconUser,
  },
  {
    title: "This is a cookie idk",
    description:
      "Cookies are yummy, and I think they taste really good. I think that this cookie is probably not great cause its blue",
    icon: IconCookie,
  },
];

export function FeaturesCards() {
  const theme = useMantineTheme();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      padding="xl"
    >
      <feature.icon
        style={{ width: rem(50), height: rem(50) }}
        stroke={2}
        color={theme.colors.blue[6]}
      />
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          Best Front-End Ever
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Scripted Reality is a Name We Had ChatGPT Come Up With
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        As you can tell we are very creative people that can think for ourselves, and definitely dont use AI for every inconvience...
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {features}
      </SimpleGrid>
    </Container>
  );
}

export default FeaturesCards;
