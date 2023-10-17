import styled from "styled-components";

export const PokeCard = styled.li`
  display: flex;
  flex-direction: column;
  margin: 0.4rem 0.5rem;
  padding: 1rem;
  border-radius: 1rem;
  color: #fff;
  z-index: 1;

  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    transform: scale(1.07);
  }
`;

export const Number = styled.span`
  color: #222222;
  text-align: right;
  opacity: 0.3;
`;

export const Name = styled.span`
  color: #fff;
  margin-bottom: 0;
  font-size: 18px;
  font-weight: 600;
  text-transform: capitalize;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  img {
    max-width: 100%;
    height: 60px;
    align-self: flex-end;
    z-index: 1;
  }
`;

export const Type = styled.li`
  color: #fff;
  padding: 0.25rem 0.5rem;
  font-size: 0.625rem;
  margin: 0.25rem 0;
  border-radius: 1rem;
  text-align: center;
  filter: brightness(1.1);
`;
