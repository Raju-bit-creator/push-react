import React from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const [articles, setArticles] = React.useState([]);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a"
      );
      if (!response) {
        throw new Error(response.status);
      }
      const data = await response.json();
      setArticles(data.articles);
      console.log(data.articles);
    } catch (error) {
      console.error("fetching error", error);
    }
  };

  const s = {
    title: "ramesh",
    age: 20,
    class: 11,
  };
  const product = [
    {
      _id: 1,
      title: "apple",
      description: "Apple is good for health",
      price: 50,
      instock: 10,
    },
    {
      _id: 2,
      title: "banana",
      description: "Banana is good for health",
      price: 60,
      instock: 5,
    },
    {
      _id: 3,
      title: "Mango",
      description: "Mango juice  is sweet",
      price: 40,
      instock: 4,
    },
  ];
  return (
    <ProductContext.Provider value={{ s, product, articles, fetchData }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
