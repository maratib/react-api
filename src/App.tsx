import { useState } from "react";
import reactLogo from "@/assets/img/react.svg";

function App() {
  const [count, setCount] = useState(0);

  const logoProps = {
    width: 96,
    height: 96,
  };

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src="/img/vite.svg"
            className="logo"
            alt="Vite logo"
            {...logoProps}
          />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img
            src={reactLogo}
            className="logo react"
            alt="React logo"
            {...logoProps}
          />
        </a>
      </div>
      <h1 className="text-red-500 text-5xl">Vite + React +</h1>
      <h1 className="text-red-500 text-5xl">TS + TailwindCSS + PWA</h1>
      <h1 className="text-red-500 text-5xl">With 100% LH Score</h1>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
