import React, { useState } from "react";
import "./styles.css";

var flagDictionary = {
  "🏁": "Chequered Flag",
  "🚩": "Triangular Flag",
  "🎌": "Crossed Flags",
  "🏴": "Black Flag",
  "🏳️": "White Flag",
  "🏳️‍🌈": "Rainbow Flag",
  "🏳️‍⚧️": "Transgender Flag",
  "🏴‍☠️": "Pirate Flag",
  "🇽🇰": "Kosovo",
  "🇹🇬": "Togo"
};

var flagEmojiList = Object.keys(flagDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function flagChangeHandler(event) {
    var userInput = event.target.value;

    meaning = flagDictionary[userInput];
    setMeaning(meaning);
  }
  if (meaning === undefined) {
    meaning = "we don't have the meaning for this flag in our database";
    // console.log(event.target.value);
  }
  console.log(meaning);

  function clickHandler(flagEmojiList) {
    console.log(flagEmojiList);
    meaning = flagDictionary[flagEmojiList];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1> Welcome to Flag Emoji Dictionary! </h1>
      <input
        placeholder="Type your flag emoji here"
        onChange={flagChangeHandler}
      />
      <h2> {meaning} </h2>
      {flagEmojiList.map(function (flagEmojiList) {
        return (
          <h3
            key={flagEmojiList}
            onClick={() => {
              clickHandler(flagEmojiList);
            }}
            style={{ cursor: "pointer" }}
          >
            {" "}
            {flagEmojiList}{" "}
          </h3>
        );
      })}
    </div>
  );
}
