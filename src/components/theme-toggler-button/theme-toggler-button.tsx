import { themes } from "../../context/ThemeProvider";
import { useTheme } from "../../context/ThemeContext";
import { ThemeButton } from "../theme-button/theme-button";
import { FiSun, FiMoon } from "react-icons/fi";
import React from "react";

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="toggleButton">
      <ThemeButton
        onClick={() =>
          setTheme(theme === themes.light ? themes.dark : themes.light)
        }
      >
        {theme === themes.light ? <FiSun /> : <FiMoon />}
      </ThemeButton>
    </div>
  );
};
