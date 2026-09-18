type DieProps = {
  value: number;
};

const Die = ({ value }: DieProps) => {
  return (
    <div className="w-full aspect-square flex items-center justify-center bg-white font-semibold text-xl cursor-pointer rounded">
      {value}
    </div>
  );
};

export default Die;
