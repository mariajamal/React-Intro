import React from 'react';
import logo from './logo.svg';
import './App.css';
import Toogle from './Toogle';
import Count from "./Count"

function App() {
  return (
    <div className="App container" style={{marginTop:"35%"}}>
      <Toogle/>
      <Count/>
    </div>
  );
}

export default App;
