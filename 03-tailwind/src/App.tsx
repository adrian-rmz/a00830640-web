import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex gap-10 justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="logo size-24 animate-pulse"
            alt="Vite logo"
          />
        </a>
        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            className="logo react size-24 animate-[spin_4s_infinite]"
            alt="React logo"
          />
        </a>
      </div>
      <div className="text-center">
        <h1 className="text-white font-bold text-5xl mt-12">Vite + React</h1>
        <div className="card text-white m-10">
          <button
            className="bg-black text-white py-2 px-4 rounded-md"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p className="p-4">
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs text-slate-500">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
