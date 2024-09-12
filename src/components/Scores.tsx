import { useState } from "react";

type ScoresProps = {
    score: number;
};
export default function Scores({ score }: ScoresProps) {
    const [highestScore, setHighestScore] = useState(0);
    if (highestScore < score) {
        setHighestScore(score);
    }

    return (
        <div className="font-semibold text-2xl">
            <p>Score: {score}</p>
            <p>
                Best Score:
                {highestScore}
            </p>
        </div>
    );
}
