import style from "./ThemeSwithcer.module.css";

import type { h } from "preact";
import { useEffect, useState } from "preact/hooks";

type Theme = "dark" | "light";

const THEME_KEY = "THEME";

export const ThemeSwithcer = () => {
  const storageTheme = localStorage.getItem(THEME_KEY);
  const initialTheme =
    storageTheme === ("dark" || "light") ? storageTheme : "light";

  const [theme, setTheme] = useState<Theme>(initialTheme);

  const isLightTheme = theme === "light";
  const background = isLightTheme ? style.lightBoxBg : style.darkBoxBg;
  const icon = isLightTheme ? style.sunCircle : style.moonCircle;

  const handleChangeTheme = ({
    currentTarget,
  }: h.JSX.TargetedEvent<HTMLInputElement, Event>) =>
    setTheme(currentTarget.value === "light" ? "dark" : "light");

  useEffect(() => {
    if (!isLightTheme) document.documentElement.classList.toggle(theme);
    else document.documentElement.className = "";

    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  return (
    <label class={`${style.box} ${background}`}>
      <div class={`${style.circle} ${icon}`}></div>
      <input
        type="checkbox"
        value={theme}
        onChange={handleChangeTheme}
        class={style.checkbox}
      />
    </label>
  );
};
