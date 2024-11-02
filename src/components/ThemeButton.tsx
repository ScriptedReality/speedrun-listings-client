import cx from "clsx";
import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Group,
} from "@mantine/core";
import { IconSun, IconMoon } from "@tabler/icons-react";
import classes from "../styles/ThemeButton.module.css";

export function ThemeButton() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <Group justify="center">
      <ActionIcon
        onClick={() =>
          setColorScheme(computedColorScheme === "light" ? "dark" : "light")
        }
        variant="default"
        size="md"
        aria-label="Toggle color scheme"
        className={classes.root}
      >
        <IconSun className={cx(classes.icon, classes.light)} stroke={1} />
        <IconMoon className={cx(classes.icon, classes.dark)} stroke={1} />
      </ActionIcon>
    </Group>
  );
}
export default ThemeButton;
