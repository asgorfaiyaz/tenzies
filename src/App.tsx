import Dice from "./components/Dice";

function App() {
  return (
    <div className="min-h-screen flex-center p-4">
      <main className="w-full max-w-120 xl:max-w-150 min-h-90 bg-[#F5F5F5] rounded-2xl p-10 flex-center">
        <Dice />
      </main>
    </div>
  );
}

export default App;
