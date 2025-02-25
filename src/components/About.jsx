import React from "react";

const About = () => {
  const handleUppercase = () => {
    console.log("you click to uppercase");
  };
  return (
    <div className="container">
      <h1>About Page</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="uppercase"
          rows="4"
          placeholder="Enter your text"
        ></textarea>

        <button onClick={handleUppercase} className="btn btn-primary mt-4">
          Convert Uppercase
        </button>
      </div>
    </div>
  );
};

export default About;
