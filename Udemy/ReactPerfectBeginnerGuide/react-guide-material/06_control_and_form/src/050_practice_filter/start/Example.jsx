"use client";
import Profile from "./components/Profile";
import { useState } from "react";

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <>
      <input
        onChange={(e) => {
          setKeyword(e.target.value);
        }}
      ></input>
      <ul>
        {persons
          // .filter((person) => person.name.includes(keyword))
          .filter((person) => {
            const isMatch = person.name.indexOf(keyword) !== -1;
            return isMatch;
          })
          .map((person) => (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Example;
