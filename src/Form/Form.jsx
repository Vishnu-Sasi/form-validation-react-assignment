import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [state, setState] = useState([
    {
      name: "",
      feedback: "",
    },
  ]);
  const [err, setErr] = useState("");

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log(state.name, state.feedback);
    if (state.name.length < 2) {
      setErr("Must be greater than 2 characters");
    } else {
      setErr("");
      alert(
        `response saved from ${state.name} and your feedback is : ${state.feedback}`
      );
    }
  };
  return (
    <div className="form">
      <div className="product">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <h4>Nike Air Shoes</h4>
      </div>
      <div className="form-div">
        <form action="#" className="form">
          <label htmlFor="">Name:</label>
          <input
            type="text"
            name="name"
            value={state.name}
            onChange={handleChange}
          />
          <div className="error">{err} </div>
          <label htmlFor="Rate-product">Share your feedback</label>
          <textarea
            onChange={handleChange}
            name="feedback"
            value={state.feedback}
          ></textarea>
          <input type="submit" className="button" onClick={handleClick} />
        </form>
      </div>
    </div>
  );
};

export default Form;
