// import { useState } from 'react';
import "./index.css";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  return (
    <div className="border border-black w-96 mx-auto mt-10 p-10 rounded-lg bg-[rgb(57,56,61)]">
      <div className="text-center font-semibold text-2xl text-white">Test</div>
      <div className="text-center mt-5">
        <div className="flex justify-center">
          <div className="flex flex-row gap-16 items-center">
            <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full font-extrabold cursor-pointer">
              ➖
            </div>
            <h3 className="text-white font-semibold">Step : 1</h3>
            <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full font-extrabold cursor-pointer">
              ➕
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <div className="flex flex-row gap-16 items-center">
            <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full font-extrabold cursor-pointer">
              ➖
            </div>
            <h3 className="text-white font-semibold">Count : 1</h3>
            <div className="bg-black text-white w-12 h-12 flex items-center justify-center rounded-full font-extrabold cursor-pointer">
              ➕
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
