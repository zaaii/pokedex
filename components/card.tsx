import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import Link from "next/link";

interface PokemonProps {
  name: string;
}

export default function Cards({ name }: PokemonProps) {
  return (
    <div>
      <Link href={`${name}`}>
        <Card className="py-4 m-4 max-sm:px-[30px] hover:border">
          <CardHeader className="pt-2 px-4 flex-col items-center max-sm:px-5">
            <h4 className="font-bold text-large uppercase">{name}</h4>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
