import usePokemon from "@/hooks/usePokemon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PokeData } from "@/hooks/usePokemon";
import { useEffect } from "react";

type PokeCardProps = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
};
export default function PokeCard({ setScore }: PokeCardProps) {
  const { pokemons, setPokemons } = usePokemon();

  const shuffleCards = (pokemons: PokeData[]) => {
    const cardsCopy = [...pokemons];

    for (let i = cardsCopy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cardsCopy[i], cardsCopy[j]] = [cardsCopy[j], cardsCopy[i]];
    }
    return cardsCopy;
  };

  const handleClick = () => {
    setScore((score: number) => score + 1);
    setPokemons(shuffleCards(pokemons));
  };

  useEffect(() => {
    setPokemons(shuffleCards(pokemons));
  }, []);

  return (
    <section className="grid gap-4 min-[520px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6">
      {pokemons.map((pokemon, idx) => (
        <div
          onClick={handleClick}
          key={idx}
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
