import type { h } from "preact";
import { useState } from "preact/hooks";

type Theme = "dark" | "light";

export const ThemeSwithcer = () => {
  const [theme, setTheme] = useState<Theme>("light");

  const handleChangeTheme = ({
    currentTarget,
  }: h.JSX.TargetedEvent<HTMLInputElement, Event>) =>
    setTheme(currentTarget.value === "light" ? "dark" : "light");

  return <slot theme={theme} />;
};
