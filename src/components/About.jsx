import React, { useState } from "react";

const About = () => {
  const [text, setText] = useState("");
  const handleUppercase = () => {
    console.log("you click to uppercase");
    setText(text.toUpperCase());
  };
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
      </div>
    </div>
  );
};

export default About;
