import { useState } from 'react';
import Another from './Another'
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    setCount(prevCount => prevCount - 1 );
  }
  const increment = () => {
    setCount(prevCount => prevCount + 1 );
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <span>{ count }</span>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
        <Another name="Paul" />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
