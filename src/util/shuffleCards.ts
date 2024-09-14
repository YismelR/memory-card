import { PokeData } from "@/hooks/usePokemon";

export const shuffleCards = (pokemons: PokeData[]) => {
  const cardsCopy = [...pokemons];

  for (let i = cardsCopy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cardsCopy[i], cardsCopy[j]] = [cardsCopy[j], cardsCopy[i]];
  }
  return cardsCopy;
};
