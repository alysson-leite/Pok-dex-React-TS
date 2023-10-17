import React, { ChangeEvent } from "react";
import { InputSearch } from "./styles";

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  }

export const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <InputSearch
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
