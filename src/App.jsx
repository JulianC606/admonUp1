import React from 'react';
import './App.scss';
import Header from './sections/header/header';
import Taylor from './sections/taylor/taylor';
import Fayol from './sections/fayol/fayol';
import AFayol from './sections/act-fayol/act-fayol';
import Beneficios from './sections/beneficios/beneficios';

function App(){
  return(
    <div className="container">
      <Header/>
      <Taylor/>
      <Fayol/>
      <AFayol/>
      <Beneficios/>
    </div>
  )
}

export default App;
