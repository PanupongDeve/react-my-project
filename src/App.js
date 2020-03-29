import React from 'react';
import '@fortawesome/fontawesome-free/js/all.min';
import { Header } from './components/Header';
import { Body } from './components/Body';


import './App.css';


function App() {
  return (
    <div className="container ta-project__container">
      <Header />
      <Body />
    </div>
  );
}

export default App;
