import React from "react";
import ProductContext from "./productContext";

const ProductState = (props) => {
  const s = {
    name: "ramesh",
    age: 20,
    class: 11,
  };
  return (
    <ProductContext.Provider value={{ s }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductState;
