import React from 'react';
import './App.css';
import { SingleSelect } from './components/singleSelect';

function App() {
  return (
    <div className="App">
      <h1>Custom Autocomplete React</h1>
      <div className="container">
        <SingleSelect />
      </div>
    </div>
  );
}

export default App;
