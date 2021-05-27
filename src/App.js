import logo from './logo.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to Sneakers IRL
        </p>
        <a
          className="App-link"
          href="https://www.instagram.com/sneakers.irl/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check out my Instagram!
        </a>
      </header>
    </div>
  );
}

export default App;
