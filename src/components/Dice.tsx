import { useState } from "react";
import Die from "./Die";

const Dice = () => {
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

  return (
    <div className="text-center flex flex-col items-center gap-3">
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
      <button onClick={handleRoll} className="mt-3">
        Roll
      </button>
    </div>
  );
};

export default Dice;
