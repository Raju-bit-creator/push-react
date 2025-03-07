import React, { useContext, useEffect, useState } from "react";
import productContext from "../context/productContext";
import dog from "../assets/dog.jpg";

const About = () => {
  const context = useContext(productContext);
  const { s, product, fetchData, articles } = context;
  console.log("ddddd", s);
  console.log("111111111 product", product);

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

  useEffect(() => {
    fetchData();
  }, []);

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
      <div className="row">
        {articles.map((e) => {
          return (
            <div className="col-md-3">
              <div key={e.id}>
                <div class="card">
                  <img src={e.urlToImage} class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{e.title}</h5>
                    <p class="card-text">{e.description}</p>
                    {/* <h4>Price: Rs.{e.price}</h4> */}
                    <a href="#" class="btn btn-primary">
                      Add to cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
