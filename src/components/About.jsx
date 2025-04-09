import React, { useContext, useEffect, useState } from "react";
import productContext from "../context/productContext";
import dog from "../assets/dog.jpg";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import EditProductModal from "./EditProductModal";

const About = () => {
  const context = useContext(productContext);
  const {
    state: { cart },
    dispatch,
    product,
    products,
    allProduct,
    deleteProduct,
    editProduct,
  } = context;
  console.log("this is state products", products);
  const [menuVisible, setMenuVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  console.log("total products:", product);

  const toggleMenu = (id) => {
    setMenuVisible((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setModalVisible(true);
  };
  const closeEditModal = () => {
    setModalVisible(false);
    setSelectedProduct(null);
  };
  const saveEdit = (updateData) => {
    // console.log("edit product", updateData);
    editProduct(updateData, selectedProduct._id);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
  };
  useEffect(() => {
    allProduct();
  }, []);

  // const [text, setText] = useState(""); //initialization
  // const handleUppercase = () => {
  //   console.log("you click to uppercase");
  //   setText(text.toUpperCase()); //mounting and update
  // };
  // // unmount
  // console.log("i a first"); //render

  // useEffect(() => {
  //   console.log("i am useffect", text);
  // }, [text]);
  // const handleLowercase = () => {
  //   console.log("you click to lowercase");
  //   setText(text.toLowerCase());
  // };
  // const handleChange = (e) => {
  //   setText(e.target.value);
  // };

  return (
    <div className="container">
      <h1>About Page</h1>
      {/* <div className="mb-3">
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
      </div> */}
      <div className="row">
        {products.map((item) => {
          return (
            <div className="col-md-3" key={item._id}>
              <div className="card">
                <img
                  src={`http://localhost:5000/uploads/${item.image[0]}`}
                  className="card-img-top"
                  alt="dog image"
                />
                <div className="card-body">
                  <div className="title-content">
                    <h5 className="card-title">{item.title}</h5>
                    <BsThreeDots onClick={() => toggleMenu(item._id)} />
                    {menuVisible[item._id] && (
                      <div className="menu-options">
                        <button onClick={() => openEditModal(item)}>
                          Edit
                        </button>
                        <button onClick={() => handleDelete(item._id)}>
                          Delete
                        </button>
                      </div>
                    )}
                  </div>
                  <p className="card-text">{item.description}</p>
                  <h4>Price: Rs.{item.price}</h4>
                  {cart && cart.some((p) => p._id === item._id) ? (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => {
                        dispatch({
                          type: "REMOVE_FROM_CART",
                          payload: item,
                        });
                      }}
                    >
                      remove from cart
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => {
                        dispatch({
                          type: "ADD_TO_CART",
                          payload: item,
                        });
                      }}
                    >
                      add to cart
                    </button>
                  )}
                  {/* <button type="button" className="btn btn-primary mx-2">
                      add to cart
                    </button>
                    <button type="button" className="btn btn-danger">
                      remove from cart
                    </button> */}
                </div>
              </div>
              {modalVisible &&
                selectedProduct &&
                selectedProduct._id === item._id && (
                  <EditProductModal
                    product={selectedProduct}
                    onClose={closeEditModal}
                    onSave={saveEdit}
                  />
                )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
