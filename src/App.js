import React from 'react';
import './App.css';

/**
 * The main application component. It displays a simple dark-themed page
 * with hacker-style aesthetics and a blinking cursor animation.
 */
function App() {
  return (
    <div className="app">
      <h1 className="title">Welcome to Hacker Vibes</h1>
      <p className="subtitle">
        An example React app with dark, animated, hacker-style aesthetics.
      </p>
      <div className="terminal">
        <span className="command">
          &gt;_ <span className="cursor" />
        </span>
      </div>
    </div>
  );
}

export default App;
