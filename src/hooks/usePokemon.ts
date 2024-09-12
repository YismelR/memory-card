import axios from "axios";
import { useState, useEffect } from "react";

type Poke = {
    url: string;
    name: string;
};

export type PokeData = {
    name: string;
    src: string;
};
const usePokemon = () => {
    const [pokemons, setPokemons] = useState<PokeData[]>([]);

    useEffect(() => {
        const getPoke = async () => {
            const response = await axios.get(
                "https://pokeapi.co/api/v2/pokemon/"
            );

            const pokemon = response.data.results;

            const pokemonImg = pokemon.map(async (poke: Poke) => {
                const pokemon = await axios.get(poke.url);

                return {
                    name: pokemon.data.name,
                    src: pokemon.data.sprites.other["official-artwork"][
                        "front_default"
                    ],
                };
            });

            const pokeData = await Promise.allSettled(pokemonImg);

            const res = pokeData
                .filter(data => {
                    return data.status === "rejected" ? false : true;
                })
                .map(poke => {
                    //@ts-expect-error pokevalue does exist typescript is wrong
                    return poke.value;
                });
            setPokemons(res);
        };
        getPoke();
    }, []);

    return { pokemons, setPokemons };
};

export default usePokemon;
