import logo from './shecodes-logo.png';
import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          Dictionary
        </header>
        <main>
          <Dictionary defaultKeyword="Dictionary"/>
          <footer className="App-footer">
            This project was coded by Kristi Boverhuis, is open-source on{" "}
            <a href="https://github.com/kboverhuis/dictionary-project">
              GitHub
            </a>
            and hosted on{" "}
            <a href="https://app.netlify.com/sites/verdant-sopapillas-a39c0d/overview">Netlify</a>
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
