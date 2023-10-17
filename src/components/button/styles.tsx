import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button`
  border: none;
  border-radius: 1rem;
  width: 100px;
  height: 30px;
  padding: 0.25rem 0.625rem;
  margin: 0.25rem 0;
  font-size: 0.7rem;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.95;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
  }
`;
