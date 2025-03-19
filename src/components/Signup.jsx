import React, { useState } from "react";
import Register from "../assets/register.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    // single react fragment in one component
    <>
      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <img
              className="register-image"
              src={Register}
              alt=" sign up image"
            />
          </div>
          <div className="col-md-6">
            <h4>Register to visit our website</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={credential.name}
                  onChange={handleChange}
                  id="exampleFormControlInput1"
                  placeholder="Name"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={credential.email}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={credential.password}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Password"
                />
              </div>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Conform Password
                </label>
                <input
                  type="password"
                  name="confirm password"
                  value={credential.cpassword}
                  onChange={handleChange}
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>

              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
