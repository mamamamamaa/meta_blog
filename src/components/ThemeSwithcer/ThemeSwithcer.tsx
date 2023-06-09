import style from "./ThemeSwithcer.module.css";

import type { h } from "preact";
import { useEffect, useState } from "preact/hooks";

type Theme = "dark" | "light";

export const ThemeSwithcer = () => {
  const [theme, setTheme] = useState<Theme>("light");

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
