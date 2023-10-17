import React from "react";
import { pokemonLogo, pikachuImg, bulbasaurImg, squirtleImg, charmanderImg } from '../../assets';
import { HeaderContainer, LogoImage, PokeImg } from "./styles";

export const Header = () => {
  return (
    <HeaderContainer>
      <PokeImg src={pikachuImg} alt="Pikachu" />
      <PokeImg src={bulbasaurImg} alt="Bulbasaur" />
      <LogoImage src={pokemonLogo} alt="Pokemon Logo" />
      <PokeImg src={squirtleImg} alt="Squirtle" />
      <PokeImg src={charmanderImg} alt="Charmander" />
    </HeaderContainer>
  );
};

export default Header;
