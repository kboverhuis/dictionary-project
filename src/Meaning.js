import React from "react";
import Synonyms from "./Synonyms"
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div className="Speech">
        <strong>{props.meaning.partOfSpeech}</strong>{" "}
      </div>
      <div className="Definition">{props.meaning.definition}</div>
      <Synonyms className="Synonym" synonyms={props.meaning.synonyms}/>
    </div>
  );
}