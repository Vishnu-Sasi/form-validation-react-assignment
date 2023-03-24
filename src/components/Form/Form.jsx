import React, { useState } from "react";
import "./Form.css";
const Form = () => {
  const [state, setState] = useState([
    {
      name: "",
      feedback: "",
      rating: "",
    },
  ]);
  const [err, setErr] = useState("");
  const [popUp, setPopUp] = useState(false);

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
        `response saved from ${state.name} rating is ${state.rating} your feedback is : ${state.feedback}`
      );
    }
  };
  const handlePopUp = () => {
    setPopUp(!popUp);
  };
  return (
    <div className="form-product">
      <div className="product">
        <img
          src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        <h4>Nike Air Shoes</h4>
      </div>
      <button className="comment" onClick={handlePopUp}>
        comment
      </button>
      {popUp ? (
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
            <label htmlFor="Rating">Rating</label>
            <select name="rating" id="" onChange={handleChange}>
              <option value="">select rating</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
            <label htmlFor="Rate-product">Share your feedback</label>
            <textarea
              onChange={handleChange}
              name="feedback"
              value={state.feedback}
            ></textarea>
            <input type="submit" className="button" onClick={handleClick} />
            <button className="button" onClick={handlePopUp}>
              close
            </button>
          </form>
        </div>
      ) : ""
      }
    </div>
  );
};

export default Form;
