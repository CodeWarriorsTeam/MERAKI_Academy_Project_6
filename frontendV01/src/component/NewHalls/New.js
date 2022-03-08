import React, { useState, useEffect } from "react";
import axios from "axios";
import "./New.css";
import { useDispatch, useSelector } from "react-redux";

import { AddHall, setHalls } from "../../reducer/halls/index";
const New = () => {
  const [message, setMessage] = useState("");

  const [hall_image, setHall_image] = useState("");
  const [hall_name, setHall_name] = useState("");
  const [video, setVideo] = useState("");
  const [hall_description, setHall_description] = useState("");
  const [hall_address, setHall_address] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const addNewHall = () => {
    axios
      .post(
        "http://localhost:3000/halls",
        {
          hall_image,
          hall_name,
          video,
          hall_description,
          hall_address,
          price,
        },
        // { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((result) => {
        dispatch(
          AddHall({
            hall_image,
            hall_name,
            video,
            hall_description,
            hall_address,
            price,
          })
        );
        setMessage("the hall has been created successfully");
      })
      .catch((err) => {
        setMessage(err.response.data.message);
      });
  };
  return (
    <>
      <div>
        <input
          className="name"
          type="text"
          placeholder="name"
          onChange={(e) => {
            setHall_name(e.target.value);
          }}
        ></input>
        <input
          className="image"
          type="text"
          placeholder="Image"
          onChange={(e) => {
            setHall_image(e.target.value);
          }}
        ></input>{" "}
        <input
          className="price"
          type="number"
          placeholder="price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        ></input>
        <input
          type="text"
          onChange={(e) => {
            setVideo(e.target.files[0]);
          }}
        ></input>
        <input
          placeholder="address"
          type="text"
          onChange={(e) => {
            setHall_address(e.target.value);
          }}
        ></input>{" "}
        <textarea
          className="description"
          type="text"
          placeholder="Description"
          onChange={(e) => {
            setHall_description(e.target.value);
          }}
        ></textarea>
        <button className="new" onClick={addNewHall}>
          New Hall
        </button>
      </div>
    </>
  );
};
export default New;