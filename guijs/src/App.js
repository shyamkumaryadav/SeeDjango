import React from 'react';
import logo from './logo.svg';
import './App.css';
import Index from "./components/home/Index";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Index />
      </header>
    </div>
  );
}

export default App;
