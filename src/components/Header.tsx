import { useState } from "react";
import { Container, Group, Center, Text, Grid } from "@mantine/core";
import classes from "../styles/Header.module.css";
import "@mantine/core/styles.css";
import ThemeButton from "./ThemeButton";
import { useNavigate } from "react-router-dom";

const links = [
  { link: "/", label: "Home" },
  { link: "/leaderboard", label: "Leaderboard" },
  { link: "/about", label: "Pricing" },
  { link: "/story", label: "Our Story" },
  { link: "/careers", label: "Careers" },
  { link: "/games", label: "Games" },
];

export function HeaderSimple() {
  const [active, setActive] = useState(links[0].link);
  const navigate = useNavigate();

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        navigate(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="xl" className={classes.inner}>
        <Grid grow>
          <Grid.Col span={4}>
            <Text
              size="xl"
              fw={900}
              gradient={{ from: "cyan", to: "blue", deg: 90 }}
            >
              Scripted Reality
            </Text>
          </Grid.Col>
          <Grid.Col span={6}>
            <Center>
              <Group gap={5} visibleFrom="md">
                {items}
                <ThemeButton />
              </Group>
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </header>
  );
}
