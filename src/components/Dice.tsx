import Die from "./Die";

const Dice = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="text-center flex flex-col items-center gap-3">
      <h1>Tenzies</h1>
      <p>
        Roll until all dice are the same. Click each die to freeze it at its
        current value between rolls.
      </p>
      <div className="grid mt-3 grid-cols-5 gap-5 w-full max-w-md">
        {nums.map((n) => {
          return <Die value={n} />;
        })}
      </div>
      <button className="mt-3">Roll</button>
    </div>
  );
};

export default Dice;
