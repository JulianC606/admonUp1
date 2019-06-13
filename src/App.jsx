import React from 'react';
import './App.scss';
import Header from './sections/header/header';
import Taylor from './sections/taylor/taylor';
import Fayol from './sections/fayol/fayol';

function App(){
  return(
    <div className="container">
      <Header/>
      <Taylor/>
      <Fayol/>
    </div>
  )
}

export default App;
