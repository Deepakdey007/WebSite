import React, { useState } from "react";
import { app, database } from "./firebaseConfig";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import {
  collection,
  addDoc,
  getDocs, // to get the data
  doc, // to update the data
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export default function Contact() {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    contactNum: "",
    count: "",
    area: "",
  });
  const auth = getAuth();
  const handleInputs = (event) => {
    let inputs = { [event.target.name]: event.target.value };
    setData({ ...data, ...inputs });
  };

  // sends data to firebase firestore
  const dbInstance = collection(database, "users");
  const handleSubmit = () => {
    addDoc(dbInstance, data)
      .then(() => {
        alert("data Sent ");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <>
      <div className="/">
        <form className="form">
          <h4>Contact Us</h4>

          <label>Name</label>
          <input
            type="name"
            name="name"
            placeholder="Name"
            onChange={(event) => handleInputs(event)}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(event) => handleInputs(event)}
          />

          <label>Address</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            onChange={(event) => handleInputs(event)}
          />

          <label>Contact Number</label>
          <input
            type="number"
            name="contactNum"
            placeholder="Number"
            onChange={(event) => handleInputs(event)}
          />

          <label>Total Number of Clothes</label>
          <input
            type="number"
            name="count"
            placeholder="Count"
            onChange={(event) => handleInputs(event)}
          />

          <label>Details of Clothes</label>
          <textarea
            placeholder="Messsage"
            name="area"
            onChange={(event) => handleInputs(event)}
          ></textarea>

          <button onClick={handleSubmit} style={{ width: "150px" }}>
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
