import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PopUpButton from "./PopUpButton";

type HighestScorePopUpProps = {
  highestScore: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setHighestScore: React.Dispatch<React.SetStateAction<number>>;
  setClickedPokemons: React.Dispatch<React.SetStateAction<string[]>>;
};
export default function HighestScorePopUp({
  highestScore,
  setScore,
  setHighestScore,
  setClickedPokemons,
}: HighestScorePopUpProps) {
  const isHighest = highestScore === 20;

  return (
    <Dialog open={isHighest}>
      <DialogTrigger></DialogTrigger>
      <DialogContent>
        <DialogHeader className="gap-4">
          <DialogTitle className="text-4xl place-self-center bg-gradient-to-r from-indigo-500 from-10% via-yellow-300 via-30% to-sky-500 to-50% text-transparent bg-clip-text animated-gradient">
            Congratulations! You score 20!
          </DialogTitle>
          <DialogDescription className="flex flex-col justify-center text-center text-2xl gap-4">
            You got the highest score in the game !<br />
            Would you like to play again?
          </DialogDescription>
          <PopUpButton
            setScore={setScore}
            setHighestScore={setHighestScore}
            setClickedPokemons={setClickedPokemons}
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
