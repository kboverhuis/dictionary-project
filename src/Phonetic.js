import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  if (props.phonetic) {
  return (
    <div className="Phonetic">
      <h5 className="text">
        <em>{props.phonetic}</em>
      </h5>
    </div>
  );
  } else {
    return null;
  }

}