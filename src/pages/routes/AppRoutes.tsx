import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PokemonList from "src/assets/ts/main";
import PokemonStats from "../../assets/ts/mainStats";
import { Pokemon } from "src/assets/ts/pokemon-model";

export const AppRoutes: React.FC = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <PokemonList />
        </Route>
        <Route exact path="/:pokemonName">
          <PokemonStats pokemon={new Pokemon()}/>
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRoutes;
