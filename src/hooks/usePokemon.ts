import { shuffleCards } from "@/util/shuffleCards";
import axios from "axios";
import { useState, useEffect } from "react";
import { Poke } from "@/Poke";
import { PokeData } from "@/PokeData";

const usePokemon = () => {
  const [pokemons, setPokemons] = useState<PokeData[]>([]);

  useEffect(() => {
    const getPoke = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/");

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
          .filter((data) => {
            return data.status !== "rejected";
          })
          .map((poke) => {
            return poke.value;
          });

        setPokemons(res);
      } catch (err) {
        console.log(err, "failed to fetch pokemon data.");
      }
    };

    getPoke();
  }, []);

  return { pokemons: shuffleCards(pokemons), setPokemons };
};

export default usePokemon;
