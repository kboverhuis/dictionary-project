import React from "react";
import "./Dictionary.css";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <div className="Speech">
        <strong>{props.meaning.partOfSpeech}</strong>{" "}
      </div>
      <div className="Definition">{props.meaning.definition}</div>
    </div>
  );
}