// import { FC, ChangeEvent, useState } from "react";
// import "./styles.css";
"use client";
import { useState, ChangeEvent, useEffect } from "react";

export default function Home() {
  // input info
  const [lastName, setLastName] = useState("");
  // const [firstName, setFirstName] = useState("");
  // const [comment, setComment] = useState("");

  // error message
  const [lastNameErrorMessage, setLastNameErrorMessage] = useState("");
  // const [firstNameErrorMessage, setFirstNameErrorMessage] = useState("");
  // const [commentErrorMessage, setCommentErrorMessage] = useState("");

  // submit process
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // prevent page reload
    // initialize error message
    setLastNameErrorMessage("");

    // Which is the emptyLastName null or somthing?
    const emptyLastName = lastName === "";
    if (emptyLastName) setLastNameErrorMessage("Please input your Last name");

    console.log("send form data, last name=", lastName);
  };

  const onChangeLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  return (
    <>
      <div className="wrapper">
        <h1>React Form</h1>
        <section className="section">
          <h2>useState Form</h2>
          <p>This is a Form example</p>
          <form onSubmit={onSubmit}>
            <div className="form-item">
              <label>
                <span className="label required">required</span>
                <span>Last name</span>
                <input
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={onChangeLastName}
                />
              </label>
              {lastNameErrorMessage && (
                <p className="error-message">{lastNameErrorMessage}</p>
              )}
            </div>
            <div className="submit-button">
              <button type="submit">Submit button</button>
            </div>
          </form>
        </section>
        <p>Last name: {lastName}</p>
      </div>
    </>
  );
}
