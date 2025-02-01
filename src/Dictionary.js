import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css'
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

function handleResponse(response) {
  setResults(response.data);
}

function search(event) {
  event.preventDefault();
  alert (`Searching for the definition of ${keyword}`);

  let apiKey = "8908d7b1834oa44093b7b64af0t393f3";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange(event) {
setKeyword(event.target.value);
}

  return <div className="Dictionary">
    <form onSubmit={search}>
      <input type='search' autoFocus={true} onChange={handleKeywordChange}></input>
    </form>
    <Results results={results}/>
  </div>;
}