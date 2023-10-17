import "./App.css";
import "./assets/styles/pokedex.css";
import { PokeballIcon } from "./components/pokeball/pokeballIcon";
import { PokeballBackground } from "./components/pokeball/pokeballBackground";
import { Header } from "./components/header";
import AppRoutes from "./pages/routes/AppRoutes";
import { Section } from "./components/section";
import React from "react";
import { ThemeProvider } from "./context/ThemeProvider";
import { ThemeTogglerButton } from "./components/theme-toggler-button/theme-toggler-button";

const App: React.FC = () => {
  return (
    <>
      <Header />
      <ThemeProvider>
        <Section>
          <PokeballBackground />
          <div className="App">
            <div>
              <PokeballIcon />
              <h1>
                <p>
                  Pokédex <span>1st Generation</span>
                </p>
              </h1>
              <PokeballIcon />
            </div>
            <div>
              <ThemeTogglerButton />
            </div>
          </div>
          <AppRoutes />
        </Section>
      </ThemeProvider>
    </>
  );
};

export default App;
