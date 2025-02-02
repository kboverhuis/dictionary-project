import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
        {props.meaning.partOfSpeech}
        {props.meaning.definition}
    </div>
        );
}