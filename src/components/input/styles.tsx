import styled from "styled-components";

export const InputSearch = styled.input`
  display: flex;
  padding: 10px;
  margin: 0 auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;
