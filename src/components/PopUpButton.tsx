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
        <Button
          className="bg-blue-900 hover:bg-yellow-600 text-2xl max-w-20"
          onClick={handleClick}
        >
          YES
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="bg-red-400">
        This action will reset both score and highest score, would you like to
        continue?
      </HoverCardContent>
    </HoverCard>
  );
}
