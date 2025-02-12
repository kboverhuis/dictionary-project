import React, { useState } from 'react';
import axios from 'axios';
import './Dictionary.css'
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

function handleResponse(response) {
  setResults(response.data);
}

function handlePhotosResponse(response) {
  console.log(response.data.photos[0]);
}

function search() {
  let apiKey = "8908d7b1834oa44093b7b64af0t393f3";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  const apiPhotosKey = `8908d7b1834oa44093b7b64af0t393f3`;
  let photosApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiPhotosKey}`;

  axios.get(photosApiUrl).then(handlePhotosResponse);
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
      <Photos photos={photos} />
    </div>
  );
 } else {
  load();
  return "Loading...";
 }
}