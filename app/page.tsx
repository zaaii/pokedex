import Image from "next/image";
import NavigationBar from "@/components/navbar";
import { PokemonGrid } from "@/components/grid";
import { getPokemonList } from "@/network/pokemonAPI";

export default async function Home() {
  const pokemonList = await getPokemonList();
  return (
    <div>
      <PokemonGrid pokemonList={pokemonList} />
    </div>
  );
}
