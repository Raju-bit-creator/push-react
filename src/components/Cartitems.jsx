import React, { useContext } from "react";
import productContext from "../context/productContext";
import dog from "../assets/dog.jpg";
import { MdDelete } from "react-icons/md";

const Cartitems = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
  } = context;

  return (
    <div className="container cart-page">
      <div className="productcontainer-cart">
        <ul className="product-list">
          {cart.map((item) => (
            <li key={item._id}>
              <div className="row cart-list">
                <div className="col-md-2">
                  <img
                    src={item.image || dog}
                    style={{ height: "80px", width: "80px" }}
                    alt={item.name}
                  />
                </div>
                <div className="col-md-2">
                  <h5>{item.title}</h5>
                </div>
                <div className="col-md-2">
                  <h5>Price: Rs.{item.price}</h5>
                </div>
                <div className="col-md-2">
                  <select value={item.qty}>
                    <option value="1">1</option>
                    <option value="1">2</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <MdDelete />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cartitems;
