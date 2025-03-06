import React from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
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
    <ProductContext.Provider value={{ s, product }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
