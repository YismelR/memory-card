import pokemonLogo from "@/assets/pokemon-logo.png";
import memoryLogo from "@/assets/memory-logo.png";
export default function PokeMemoryCard() {
    return (
        <>
            <section className="flex justify-between place-items-center">
                <header className="flex ">
                    <img
                        src={pokemonLogo}
                        alt="pokemon logo"
                        className="size-20"
                    />
                    <img src={memoryLogo} alt="memory logo" className="h-24" />
                </header>
                <div className="font-semibold">
                    <p>Score:</p>
                    <p>Best Score:</p>
                </div>
            </section>
        </>
    );
}
