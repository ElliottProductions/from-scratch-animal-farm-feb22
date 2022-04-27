import '../App.css';
import backgroundImg from '../background.png';
import AnimalList from './AnimalList/AnimalList.js';
import React from 'react';


export default function Main({ animals }) {
  return <main style={{ backgroundImage: `url(${backgroundImg})` }}>
    <AnimalList animals={animals}/> 
  </main>;
}