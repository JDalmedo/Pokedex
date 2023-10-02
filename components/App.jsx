import { useState } from 'react'
import Axios from "axios"

import './App.css'

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemon, setPokemon] = useState([]);
    const searchPokemon = () => {
      Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then(
        (res) => {
          setPokemon({
            name: pokemonName,
            number: res.data.id,
            species: res.data.species.name,
            image: res.data.sprites.front_default,
            hp: res.data.stats[0].base_stat,
            attack: res.data.stats[1].base_stat,
            defense: res.data.stats[2].base_stat,
            speed: res.data.stats[5].base_stat,
            type: res.data.types[0].type.name,
          });
        }  
      );
    };
  return (
    <div className="App">
      <div className="TitleSection">
        <h1>Pokédex</h1>
        <input type="text" 
        onChange={(event) => {
          setPokemonName(event.target.value)}} />
        <button onClick={searchPokemon}>Buscar Pokémon...</button>
      </div>
    </div>
  )
}

export default App
