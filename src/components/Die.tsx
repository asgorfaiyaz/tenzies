type DieProps = {
  die: {
    id: string;
    value: number;
    isSelected: boolean;
  };
  handleDice: () => void;
};

const Die = ({ die: { value, isSelected }, handleDice }: DieProps) => {
  return (
    <button
      onClick={handleDice}
      className={`w-full aspect-square flex items-center justify-center ${isSelected ? "bg-green-300" : "bg-white"} font-semibold text-xl cursor-pointer rounded`}
    >
      {value}
    </button>
  );
};

export default Die;
