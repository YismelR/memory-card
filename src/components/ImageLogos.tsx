import pokemonLogo from "@/assets/pokemon-logo.png";
import memoryLogo from "@/assets/memory-logo.png";
export default function ImageLogos() {
    return (
        <div className="flex ">
            <img src={pokemonLogo} alt="pokemon logo" className="size-20" />
            <img src={memoryLogo} alt="memory logo" className="h-24" />
        </div>
    );
}
