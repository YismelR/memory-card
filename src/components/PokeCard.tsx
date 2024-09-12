import usePokemon from "@/hooks/usePokemon";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PokeCard() {
    const { pokemons } = usePokemon();
    return (
        <section className="grid gap-4 min-[520px]:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-6">
            {pokemons.map((pokemon, idx) => (
                <div
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
