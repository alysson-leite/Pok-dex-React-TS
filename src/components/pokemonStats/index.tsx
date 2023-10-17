import React from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  Container,
  StatsContainer,
  About,
  Stats,
  NameStat,
  PokemonDetail,
  NameContainer,
  TypeStat,
  NumberStat,
  StatsTitle,
  StatsDetail,
  StatsGrid,
  PokemonStats,
  StatsGridTitle,
  StatsGridDetail,
  ProgressBar,
  ProgressBarFill,
  StatsProgressBar,
} from "./styles";
import { PokeballStat } from "../pokeball/pokeballStat";
import { Pokemon } from "../../assets/ts/pokemon-model";
import { LiaWeightHangingSolid } from "react-icons/lia";
import { BiRuler } from "react-icons/bi";
import { BsLightning } from "react-icons/bs";
import { RiSwordLine } from "react-icons/ri";

interface PokemonStatsProps {
  pokemon: Pokemon;
}

export const PokemonData: React.FC<PokemonStatsProps> = ({ pokemon }) => {
  const { theme } = useTheme();

  return (
    <Container className={`${pokemon.type}`}>
      <PokeballStat />
      <PokemonDetail>
        <NameContainer>
          <NumberStat style={{ color: theme.background }}>
            #{pokemon.number}
          </NumberStat>
          <NameStat>{pokemon.name}</NameStat>
          <ol>
            {pokemon.types.map((type) => (
              <TypeStat key={type} className={`${type}`}>
                {type}
              </TypeStat>
            ))}
          </ol>
        </NameContainer>
        <img src={pokemon.photo} alt={pokemon.name} />
      </PokemonDetail>
      <About>
        <Stats style={{ color: theme.background }}>
          <StatsTitle className={`${pokemon.type}`}>
            <LiaWeightHangingSolid className="icons" />
            <span>Weight</span>
          </StatsTitle>
          <StatsDetail>
            <span className={`${pokemon.type}`}>{pokemon.weight / 10} kg</span>
          </StatsDetail>
        </Stats>
        <Stats style={{ color: theme.background }}>
          <StatsTitle className={`${pokemon.type}`}>
            <BiRuler className="icons" />
            <span>Height</span>
          </StatsTitle>
          <StatsDetail>
            <span className={`${pokemon.type}`}>
              {pokemon.height > 10
                ? pokemon.height / 10 + " m"
                : pokemon.height + " cm"}
            </span>
          </StatsDetail>
        </Stats>
        <Stats style={{ color: theme.background }}>
          <StatsTitle className={`${pokemon.type}`}>
            <BsLightning className="icons" />
            <span>Abilities</span>
          </StatsTitle>
          <StatsDetail>
            <span className={`abilities ${pokemon.type}`}>
              {pokemon.abilities.join(" | ")}
            </span>
          </StatsDetail>
        </Stats>
        <Stats style={{ color: theme.background }}>
          <StatsTitle className={`${pokemon.type}`}>
            <RiSwordLine className="icons" />
            <span>Attacks</span>
          </StatsTitle>
          <StatsDetail>
            <span className={`abilities ${pokemon.type}`}>
              {pokemon.moves
                .filter((move, index) => {
                  const learnedAt = pokemon.version_group_details[index];
                  return learnedAt > 20;
                })
                .slice(1, 11)
                .join(" | ") ||
                pokemon.moves
                  .filter((move, index) => {
                    const learnedAt = pokemon.version_group_details[index];
                    return learnedAt;
                  })
                  .slice(0, 5)
                  .join(" | ")}
            </span>
          </StatsDetail>
        </Stats>
      </About>
      <StatsContainer style={{ color: theme.background }}>
        <PokemonStats>
          <span>Stats</span>
        </PokemonStats>
        <StatsGrid>
          <StatsGridTitle>
            <ol>
              {pokemon.stats.map((stat) => (
                <div key={stat} className="abilities">
                  {stat}
                </div>
              ))}
            </ol>
          </StatsGridTitle>
          <StatsGridDetail>
            <ol>
              {pokemon.baseStats.map((stat) => (
                <div key={stat}>{stat}</div>
              ))}
            </ol>
          </StatsGridDetail>
          <StatsProgressBar>
            <ol>
              {pokemon.baseStats.map((stat) => (
                <div key={stat} className="progressBarContainer">
                  <ProgressBar>
                    <ProgressBarFill percentage={stat} />
                  </ProgressBar>
                </div>
              ))}
            </ol>
          </StatsProgressBar>
        </StatsGrid>
      </StatsContainer>
    </Container>
  );
};

export default PokemonData;
