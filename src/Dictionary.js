import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css'
import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

function handleResponse(response) {
  setResults(response.data);
}

function search() {
  let apiKey = "8908d7b1834oa44093b7b64af0t393f3";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}

function handleKeywordChange(event) {
setKeyword(event.target.value);
}

function load() {
setLoaded(true);
search();
}

if (loaded) {
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            autoFocus={true}
            onChange={handleKeywordChange}
            placeholder="Search Dictionary"
          ></input>
        </form>
        <div className="hint">Ex : Bike, cookies, cats, plants...</div>
      </section>
      <Results results={results} />
    </div>
  );
 } else {
  load();
  return "Loading...";
 }
}