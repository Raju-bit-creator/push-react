import React, { useContext, useEffect, useState } from "react";
import productContext from "../context/productContext";

const About = () => {
  const context = useContext(productContext);
  const { s } = context;
  console.log("ddddd", s);

  const [text, setText] = useState(""); //initialization
  const handleUppercase = () => {
    console.log("you click to uppercase");
    setText(text.toUpperCase()); //mounting and update
  };
  // unmount
  console.log("i a first"); //render

  useEffect(() => {
    console.log("i am useffect", text);
  }, [text]);
  const handleLowercase = () => {
    console.log("you click to lowercase");
    setText(text.toLowerCase());
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div className="container">
      <h1>About Page</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="uppercase"
          rows="4"
          name="text"
          value={text}
          onChange={handleChange}
          placeholder="Enter your text ..."
        ></textarea>

        <button onClick={handleUppercase} className="btn btn-primary mt-4 mx-2">
          Convert Uppercase
        </button>
        <button onClick={handleLowercase} className="btn btn-primary mt-4 mx-2">
          Convert Lowercase
        </button>
        <button className="btn btn-primary mt-4 mx-2">Copy Text</button>
        <button className="btn btn-danger mt-4 mx-2">Clear Text</button>
        <h6>total word: {text.split(" ").length}</h6>
        <h6>total sentences: {text.split(".").length}</h6>
        <h4>preview</h4>

        <p>{text}</p>
        <p>
          my friend name is {s.name} and his age is {s.age} and he is reading in
          class
          {s.class}
        </p>
      </div>
    </div>
  );
};

export default About;

// import React, { useEffect, useState } from 'react'

// const about = () => {
//   const [count, setCount]= useState(1)
//   //mounting phase
//   useEffect(()=>{
//     console.log("i am useffect")
//   },[])
//   //updating phase
//   useEffect(()=>{
//     console.log("i am useffect")
//   },[])

//   // unmounting phase

//   return (
//     <div>

//     </div>
//   )
// }

// export default about
