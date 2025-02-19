import { useState } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Navbar />
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
