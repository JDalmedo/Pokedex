import { useState } from 'react'
import Axios from "axios"
import './App.css'

const App = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [pokemonChosen, setPokemonChosen] = useState(false);
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
          setPokemonChosen(true);
        }  
      );
    };
  return (
    <div className="App">
       <div className="TitleSection">
         <h1>Pokémon</h1>
         <input type="text" 
         onChange={(event) => {
          setPokemonName(event.target.value)}}
          value={pokemonName.toLowerCase()} placeholder='Busca tu pokémon'/>
           <div className="DisplaySection">
             {pokemonName &&  <button onClick={searchPokemon}>Click</button>}
             {!pokemonChosen ? (
              <h1> Elige entre más 100 </h1>
              ) : (
                <>
                  <h1>{pokemon.name}</h1>
                  <img className="poken" src={pokemon.image} alt={pokemon.name} />
                  <div className="pkn">    
                   <h3>Number: #{pokemon.number}</h3>
                   <h3>Species: {pokemon.species}</h3>
                   <h3>Type: {pokemon.type}</h3>
                   <h4>Hp: {pokemon.hp}</h4>
                   <h4>Attack: {pokemon.attack}</h4>
                   <h4>Defense: {pokemon.defense}</h4>
                   <h4>Speed: {pokemon.speed}</h4>
                  </div> 
                </>  
              )}
            </div>
       </div>
         
     </div>
  )
}

export default App
