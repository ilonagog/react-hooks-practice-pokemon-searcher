import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])

  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(" http://localhost:3001/pokemon")
      .then(r => r.json())
      .then(data => setPokemon(data))
  }, [])

  const filteredPokemon = pokemon.filter(poke => poke.name.toLowerCase().includes(searchTerm.toLowerCase()))
  console.log(filteredPokemon)

  const addNewPoke = (newPoke) => {
    setPokemon([...pokemon, newPoke])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPoke={addNewPoke} />
      <br />
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <br />
      <PokemonCollection pokemon={filteredPokemon} />
    </Container>
  );
}

export default PokemonPage;
