import { useState } from "react";
import ImageLogos from "./ImageLogos";
import PokeCard from "./PokeCard";
import Scores from "./Scores";
export default function PokeMemoryCard() {
    const [score, setScore] = useState(0);

    return (
        <>
            <header className="flex flex-col sm:flex-row justify-between place-items-center">
                <ImageLogos />
                <Scores score={score} />
            </header>
            <PokeCard setScore={setScore} />
        </>
    );
}
