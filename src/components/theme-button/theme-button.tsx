import React from "react";
import { useTheme } from "../../context/ThemeContext";

export const ThemeButton = (props) => {
  const { theme } = useTheme();

  return (
    <button
      {...props}
      className="themeButton"
      style={{
        color: theme.color,
        background: theme.background,
      }}
    />
  );
};
