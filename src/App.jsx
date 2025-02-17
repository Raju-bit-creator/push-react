import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("aryash");

  const handleClick = () => {
    setName("krishma");
  };
  const handleCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <h2>hello push batch greeting</h2>
      </div>
      <h1>Namaste</h1>
      <div className="card">
        <button onClick={handleClick}>click me</button>
        <button onClick={handleCount}>click me</button>
        <h4>total click : {count}</h4>
        <h4>name : {name}</h4>
      </div>
    </div>
  );
}

export default App;
