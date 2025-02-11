import React from "react";

export default function Phonetic(props) {
  if (props.phonetic) {
  return (
    <div className="Phonetic">
      <h5>
        <em>{props.phonetic}</em>
      </h5>
    </div>
  );
  } else {
    return null;
  }

}