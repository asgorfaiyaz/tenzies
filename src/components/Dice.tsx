import { useState } from "react";
import Die from "./Die";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const Dice = () => {
  const { width, height } = useWindowSize();
  function allNewDice(num: number) {
    return new Array(num).fill(1).map(() => {
      return {
        id: crypto.randomUUID(),
        value: Math.floor(Math.random() * 10 + 1),
        isSelected: false,
      };
    });
  }
  const [dice, setDice] = useState(() => allNewDice(10));

  const handleDice = (id: string) =>
    setDice((prev) => {
      return prev.map((die) => {
        if (die.id === id) {
          return { ...die, isSelected: !die.isSelected };
        }
        return die;
      });
    });

  const handleRoll = () =>
    setDice((prev) => {
      return prev.map((die) => {
        if (die.isSelected === false) {
          return {
            id: crypto.randomUUID(),
            value: Math.floor(Math.random() * 10 + 1),
            isSelected: false,
          };
        }
        return die;
      });
    });

  const isGameWon = dice.every(
    (d) => d.isSelected === true && dice[0].value === d.value,
  );

  const isError =
    dice.every((d) => d.isSelected === true) &&
    dice.some((d) => dice[0].value !== d.value);

  return (
    <div className="text-center flex flex-col items-center gap-3">
      {isGameWon && (
        <Confetti
          width={width}
          height={height}
          numberOfPieces={500}
          recycle={false}
          gravity={0.2}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 50,
            pointerEvents: "none",
          }}
        />
      )}
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid mt-3 grid-cols-5 gap-5 w-full max-w-md">
        {dice.map((die) => {
          return (
            <Die die={die} key={die.id} handleDice={() => handleDice(die.id)} />
          );
        })}
      </div>
      {isError && (
        <p className="text-red-500 font-semibold mt-3">
          Not quite! 🎲 Roll again to match all the dice.
        </p>
      )}
      <button onClick={handleRoll} className="mt-3">
        {isGameWon ? "New Game" : "Roll"}
      </button>
    </div>
  );
};

export default Dice;
