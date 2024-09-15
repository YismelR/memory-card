import { useEffect } from "react";

type ScoresProps = {
  score: number;
  highestScore: number;
  setHighestScore: React.Dispatch<React.SetStateAction<number>>;
};

export default function Scores({
  score,
  highestScore,
  setHighestScore,
}: ScoresProps) {
  useEffect(() => {
    if (highestScore < score) {
      setHighestScore(score);
    }
  }, [score, highestScore, setHighestScore]);

  return (
    <div className="font-semibold text-2xl">
      <p>Score: {score}</p>
      <p>Best Score: {highestScore} / 20</p>
    </div>
  );
}
