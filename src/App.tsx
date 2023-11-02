import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import CounterButton from "./components/CounterButton";
import { doubleItIfEven } from "./utils";

function App() {
  const [count, setCount] = useState(0);
  const [count2x, setCount2x] = useState(1);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <CounterButton
          text="The count is"
          count={count}
          onClick={() => setCount((oldCount) => oldCount + 1)}
        />
        <CounterButton
          text="The 2x count is"
          count={count2x}
          onClick={() => setCount2x(doubleItIfEven)}
        />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
