import style from "./ThemeSwithcer.module.css";

import type { FunctionComponent, h } from "preact";
import { useState } from "preact/hooks";

type Theme = "dark" | "light";

export const ThemeSwithcer: FunctionComponent = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const typeOfTheme = theme === "light";
  const background = typeOfTheme ? style.lightBoxBg : style.darkBoxBg;
  const icon = typeOfTheme ? style.sunCircle : style.moonCircle;

  const handleChangeTheme = ({
    currentTarget,
  }: h.JSX.TargetedEvent<HTMLInputElement, Event>) =>
    setTheme(currentTarget.value === "light" ? "dark" : "light");

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
