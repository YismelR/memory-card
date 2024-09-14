import { useState } from "react";
import ImageLogos from "./ImageLogos";
import PokeCard from "./PokeCard";
import Scores from "./Scores";
import HighestScorePopUp from "./HighestScorePopUp";
export default function PokeMemoryCard() {
  const [score, setScore] = useState(0);
  const [clickedPokemons, setClickedPokemons] = useState<string[]>([]);
  const [highestScore, setHighestScore] = useState(0);

  return (
    <>
      <header className="flex flex-col sm:flex-row justify-between place-items-center">
        <ImageLogos />
        <Scores
          score={score}
          highestScore={highestScore}
          setHighestScore={setHighestScore}
        />
      </header>
      <PokeCard
        setScore={setScore}
        clickedPokemons={clickedPokemons}
        setClickedPokemons={setClickedPokemons}
      />
      <HighestScorePopUp
        highestScore={highestScore}
        setScore={setScore}
        setHighestScore={setHighestScore}
        setClickedPokemons={setClickedPokemons}
      />
    </>
  );
}
