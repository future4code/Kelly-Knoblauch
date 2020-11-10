import React, { useEffect } from "react";
import "./styles.css";
import axios from "axios";
import PokeCard from "./components/PokeCard";

export default function App() {

  const [pokeList,setPokeList] = useState([])
  const [pokeName, setPokeName] = useState("")
    

  
  useEffect(() => {
    // função axios que está batendo na API e buscando 151 pokemons
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => setPokeList(response.data.results ))
      .catch((err) => {
        console.log(err);
      });
  }, [pokeList]);

  const changePokeName = (event) => {
    setPokeName(event.target.value);
  };

  
  return (
      <div>
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={this.changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {PokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {PokeName && <PokeCard pokemon={PokeName} />}
      </div>
    );
  
}


