import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

import Footer from "./components/Footer";
import Alert from "./components/Alert";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("first project");
  const [text, setText] = useState("Enable dark");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

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
      <Router>
        <Navbar toggleMode={toggleMode} title={title} text={text} mode={mode} />
        <Alert alert={alert} />
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
