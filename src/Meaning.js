import React from "react";
import Synonyms from "./Synonyms"
import "./Dictionary.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="Speech">
        <strong>{props.meaning.partOfSpeech}</strong>{" "}
      </div>
      <div className="Definition"><strong>Definition: </strong>{props.meaning.definition}</div>
      <Synonyms synonyms={props.meaning.synonyms}/>
    </div>
  );
}