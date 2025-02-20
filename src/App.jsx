import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("first project");
  const [text, setText] = useState("Enable dark");
  const [mode, setMode] = useState("light");
  const handleClick = () => {
    setCount(count + 1);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <>
      <Navbar toggleMode={toggleMode} title={title} text={text} mode={mode} />
      <Banner />
      <Testimonials />
      <Footer />
      <button className="btn btn-primary" onClick={handleClick}>
        click me
      </button>
      <h3>count : {count}</h3>
    </>
  );
}

export default App;
