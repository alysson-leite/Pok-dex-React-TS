import styled from 'styled-components'

export const HeaderContainer = styled.header`
    width: 100vw;
    height: 150px;
    background-color: #B71C1C;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const LogoImage = styled.img`
    width: 300px;
`

export const PokeImg = styled.img`
    width: 100px;

    @media (max-width: 768px) {
        display: none;
  }
`