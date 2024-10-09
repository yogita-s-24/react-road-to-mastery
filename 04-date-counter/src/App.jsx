import { useState } from "react";
import "./index.css";

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);

  return (
    <div className="border border-black w-96 mx-auto mt-10 p-10 rounded-lg bg-[rgb(57,56,61)]">
      <div className="text-center font-semibold text-2xl text-white">Test</div>
      <div className="text-center mt-5">
        <div className="flex justify-center">
          <div className="flex flex-row gap-16 items-center">
            <button
              className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full font-extrabold cursor-pointer"
              onClick={() => setStep((c) => c - 1)}>
              ➖
            </button>
            <h3 className="text-white font-semibold">Step : {step}</h3>
            <button
              className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full font-extrabold cursor-pointer"
              onClick={() => setStep((c) => c + 1)}>
              ➕
            </button>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex flex-row gap-16 items-center">
            <button 
            className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full font-extrabold cursor-pointer"
            onClick={() => setCount((c) => c - step)}
            >
              ➖
            </button>
            <h3 className="text-white font-semibold">Count : {count}</h3>
            <button 
            className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full font-extrabold cursor-pointer"
            onClick={() => setCount((c) => c + step)}
            >
              ➕
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
