import logo from './shecodes-logo.png';
import './App.css';
import Dictionary from './Dictionary'

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          Hello World
        </header>
        <main>
          <Dictionary />
          <footer className='App-footer'>
            Coded by Kristi Boverhuis
          </footer>
        </main>
      </div>
    </div>
  );
}

export default App;
