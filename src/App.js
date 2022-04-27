import React from 'react';
import './App.css';
import { animals } from './data.js';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import Footer from './Footer/Footer.js';

export default function App() {
  return (
    <div className="App">
      <Header name='Elliott Cheifetz'/>
      <Main animals={animals}/>
      <Footer date='2022'/>
    </div>
  );
}

