import { getPokemon } from "@/network/pokemonAPI";
import { PokemonImage } from "@/components/pokemonImage";
import { Progress } from "@nextui-org/progress";
import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";


export default async function PokemonPage({
  params,
}: {
  params: { pokemonName: string };
}) {
  const { pokemonName } = params;

  const pokemonObject = await getPokemon(pokemonName);

  return (
    <div>
      <div className="flex justify-center py-4">
      <Card className="py-4 w-min items-center">
      <CardHeader className="pb-0 pt-2 px-4 flex-col">
      <h4 className="font-bold text-large uppercase">{pokemonName}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2 w-[300px] h-[300px]">
      <PokemonImage
          image={pokemonObject.sprites.other["official-artwork"].front_default}
          name={pokemonName}
        />
        
      </CardBody>
      <CardFooter className="justify-center gap-4 before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-medium text-white">Height : {pokemonObject.height}</p>
        <p className="text-medium text-white">Weight : {pokemonObject.weight}</p>
      </CardFooter>
    </Card>
    </div>
      <div className="flex-col">
        {pokemonObject.stats.map((stat: any, index: number) => {
          const statName = stat.stat.name;
          const statValue = stat.base_stat;
          return (
            <div className="flex item-stretch m-5" key={index}>
              <h3 color="primary" className="p-3 w-2/4">{statName}</h3>
              <Progress
                aria-label="Loading..."
                value={statValue}
                className="w-2/4 m-auto"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
