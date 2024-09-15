import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "./ui/button";

type PopUpButtonProps = {
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setHighestScore: React.Dispatch<React.SetStateAction<number>>;
  setClickedPokemons: React.Dispatch<React.SetStateAction<string[]>>;
};

export default function PopUpButton({
  setScore,
  setHighestScore,
  setClickedPokemons,
}: PopUpButtonProps) {
  const handleClick = () => {
    setScore(0);
    setHighestScore(0);
    setClickedPokemons([]);
  };
  return (
    <HoverCard>
      <HoverCardTrigger className="flex justify-center">
        {/* whenever the yes button is clicked I get this error on the console.
        "Unable to preventDefault inside passive event listener invocation." */}
        <Button
          className="bg-blue-900 hover:bg-yellow-600 text-2xl max-w-20"
          onClick={handleClick}
        >
          YES
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="bg-red-400">
        This action will reset both score and highest score. Select Yes to start
        again!
      </HoverCardContent>
    </HoverCard>
  );
}
