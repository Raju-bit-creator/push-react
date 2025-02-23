import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Alert from "./components/Alert";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("first project");
  const [text, setText] = useState("Enable dark");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const handleClick = () => {
    setCount(count + 1);
  };

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setText("Enable light");
      showAlert("success", "Dark mode enabled");
    } else {
      setMode("light");
      setText("Enable dark");
      showAlert("success", "Light mode enabled");
    }
  };

  return (
    <>
      <Navbar toggleMode={toggleMode} title={title} text={text} mode={mode} />
      <Alert alert={alert} />
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
