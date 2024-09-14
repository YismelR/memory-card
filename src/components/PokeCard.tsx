import usePokemon from "@/hooks/usePokemon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { shuffleCards } from "@/util/shuffleCards";

type PokeCardProps = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
};
export default function PokeCard({ setScore }: PokeCardProps) {
  const { pokemons, setPokemons } = usePokemon();
  const [clickedPokemons, setClickedPokemons] = useState<string[]>([]);

  const handleClick = (name: string) => {
    if (clickedPokemons.includes(name)) {
      setScore(0);
      setClickedPokemons([]);
    } else {
      setScore((score: number) => score + 1);
      setClickedPokemons([...clickedPokemons, name]);
    }
    setPokemons(shuffleCards(pokemons));
  };

  useEffect(() => {
    setPokemons(shuffleCards(pokemons));
  }, []);

  return (
    <section className="grid gap-4 min-[520px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6">
      {pokemons.map((pokemon) => (
        <div
          onClick={() => handleClick(pokemon.name)}
          key={pokemon.name}
          className="hover:shadow-hovercard from-indigo-500 from-10% via-sky-500 via-30% to-yellow-300 to-50% p-1 rounded-2xl cursor-pointer animated-gradient hover:bg-gradient-to-r"
        >
          <Card className="shadow-2xl">
            <CardContent>
              <img src={pokemon.src} />
            </CardContent>
            <CardHeader>
              <CardTitle className=" text-xl md:text-2xl">
                {pokemon.name}
              </CardTitle>
            </CardHeader>
          </Card>
        </div>
      ))}
    </section>
  );
}
