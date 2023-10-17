import { ButtonContainer, Btn } from "./styles";
import { useTheme } from "../../context/ThemeContext";
import React from "react";

interface ButtonProps {
  onClick?: () => void;
  children?: string;
  disabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  const { theme } = useTheme();

  return (
    <ButtonContainer
    >
      <Btn onClick={onClick} style={{ color: theme.background, background: theme.color }}>{children}</Btn>
    </ButtonContainer>
  );
};

export default Button;
