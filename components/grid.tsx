"use client";

import { useState } from "react";
import { Input } from "@nextui-org/react";
import Card from "./card";
import { getPokemon } from "@/network/pokemonAPI";

interface PokemonGridProps {
    pokemonList: any
}

export function PokemonGrid({ pokemonList } : PokemonGridProps) {
    const [ search, setSearch ] = useState("");
    const pokemonName = pokemonList.map((pokemon: any) => pokemon.name);
    const pokemonObject = getPokemon(pokemonName);

    console.log(pokemonList);

    const searchFilter = (pokemonList: any, pokemonObject: any) => {
        return pokemonList.filter(
            (pokemon: any) => pokemon.name.toLowerCase().includes(search.toLowerCase())
        )
    }

    const filteredPokemonList = searchFilter(pokemonList, pokemonObject);

  return (
    <div>
      <div className="flex justify-center py-5 px-10 md:px-40 lg:px-96">
        <Input
          type="text"
          label="Pokemon Name :"
          labelPlacement="outside"
          autoComplete="off"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          id="pokemonName"
          description="pikachu, bulbasaur, etc"
        />
      </div>
      <div className="justify-center grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
        {filteredPokemonList.map((pokemon: any) => {
          return <Card name={pokemon.name} key={pokemon.name} />;
        })}
      </div>
    </div>
  );
}
