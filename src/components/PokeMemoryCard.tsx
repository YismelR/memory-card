import ImageLogos from "./ImageLogos";
import PokeCard from "./PokeCard";
import Scores from "./Scores";
export default function PokeMemoryCard() {
    return (
        <>
            <header className="flex flex-col sm:flex-row justify-between place-items-center">
                <ImageLogos />
                <Scores />
            </header>
            <PokeCard />
        </>
    );
}
