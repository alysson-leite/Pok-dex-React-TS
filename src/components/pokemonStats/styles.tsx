import styled from "styled-components";

interface ProgressBarProps {
  percentage: number;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 1rem auto;
  padding: 2rem 1rem;
  border-radius: 1rem;
  position: relative;

  @media (min-width: 768px) {
    max-width: 768px;
    padding: 2rem 2rem;
  }

  @media (min-width: 992px) {
    max-width: 992px;
    padding: 3rem 5rem;
    position: relative;
  }
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.8rem;
  gap: 10px;
  align-items: start;

  @media (min-width: 992px) {
    margin-top: 0;
  }
`;

export const Stats = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 0.85rem;
  color: #333;
  margin-bottom: 0.4rem;

  @media (min-width: 576px) {
    display: grid;
    grid-template-columns: 0.6fr 1.4fr;
    gap: 10px;
  }

  @media (min-width: 992px) {
    grid-template-columns: 0.5fr 1.5fr;
    font-size: 1rem;
    font-weight: 600;
  }
`;

export const StatsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 12rem;

  margin: 0.2rem auto;
  padding: 0.6rem 1rem;
  border-radius: 1.2rem;
  filter: brightness(1.1);

  span {
    margin-left: 6px;
    font-weight: 700;
  }
`;

export const StatsDetail = styled.div`
  padding: 0rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  filter: none;

  @media (min-width: 576px) {
    justify-content: start;
    text-align: justify;
    filter: brightness(1.1);
  }

  span {
    border-radius: 1.2rem;
    padding: 0.4rem 1rem;
    line-height: 1.3rem;
  }
`;

export const NumberStat = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  opacity: 0.9;

  @media (min-width: 576px) {
    margin-bottom: 30px;
  }
`;

export const NameStat = styled.span`
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  text-transform: capitalize;
`;

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0.5rem;
`;

export const PokemonDetail = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: 576px) {
    justify-content: space-between;
    flex-direction: row;
  }

  img {
    width: 180px;
    margin: 1.5rem auto;
    z-index: 1;

    @media (min-width: 576px) {
      width: 250px;
      margin: 0 0 2.5rem 0;
    }
  }
`;

export const TypeStat = styled.div`
  text-align: center;
  color: #fff;
  width: 6rem;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  margin: 0.5rem 0;
  border-radius: 1rem;
  text-align: center;
  filter: brightness(1.1);
`;

export const PokemonStats = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.75rem;
  margin-bottom: 0.3rem;

  span {
    font-size: 1.3rem;
    font-weight: 600;
  }

  @media (min-width: 992px) {
    margin-bottom: 0.8rem;
  }
`;

export const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  padding: 2rem 1rem;

  width: 100%;
`;

export const StatsGrid = styled.div`
  width: 100%;

  display: grid;
  align-items: center;
  grid-template-columns: 27% 12% 60%;
  gap: 10px;
  font-size: 1rem;
`;

export const StatsGridTitle = styled.div`
  ol div{
    display: grid;
    align-items: center;
    height: 2.5rem;
    font-size: 14px;

    @media (min-width: 576px) {
    gap: 10px;
    font-size: 16px;
  }
  }
`;

export const StatsGridDetail = styled.div`
  ol div {
    display: grid;
    align-items: center;
    height: 2.5rem;
  }
  padding: 0.15rem 0.6em;
`;

export const StatsProgressBar = styled.div`
  ol {
    display: grid;
  }
  padding: 0rem 0.5em;

  .progressBarContainer {
    display: flex;
    align-items: center;
    height: 2.5rem;
  }
`;

export const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 14px;
  padding: 4px;
  background-color: transparent;
  border-radius: 1rem;
  border: solid 1px;
`;

export const ProgressBarFill = styled.div<ProgressBarProps>`
  height: 100%;
  border-radius: 1rem;
  width: ${(props) => (props.percentage / 154) * 100}%;
  background-color: ${(props) => {
    if (props.percentage > 129) {
      return "#ffd700";
    } else if (props.percentage > 99) {
      return "#007bff";
    } else if (props.percentage > 59) {
      return "#28a745";
    } else {
      return "#dc3545";
    }
  }};
  transition: width 0.3s ease;
`;
