import React from 'react';
import Instructions from '../Instructions/Instructions.js';
import data from './data';
import AnimalCard from '../AnimalCard/AnimalCard';
import './App.css';
import Effecting from './UseEffect.js';

const DisplayEmojiName = event => alert(event.target.id);

const emojis = [
  {
   emoji: "😀",
   name: "grinning face"
  },
  {
   emoji: "🎉",
   name: "party popper"
  },
  {
   emoji: "💃",
   name: "woman dancing"
  }
  ];

function App() {
  const greeting = 'greeting';
  const displayAction = false;
  return (
    <>
   
    <div className='container'>
      <h1 id={greeting}>hello, world</h1>
      {displayAction && <p>i am writing jsx syntax</p>}
      <Instructions/>
      
      <ul>
      

{
 emojis.map(emoji => (
 <li key={emoji.name}>
 <button
 onClick={DisplayEmojiName}
 >
 <span role="img" aria-label={emoji.name}
 id={emoji.name}>{emoji.emoji}</span>
 </button>
 </li>
 ))
 }
      </ul>

     
 </div>

 <div className="wrapper">
 <h1>Animals</h1>
 {data.map(animal => (
 <AnimalCard
 additional={animal.additional}
 diet={animal.diet}
 key={animal.name}
 name={animal.name}
 scientificName={animal.scientificName}
 size={animal.size}
 />
 ))}
 </div>

 <div>
  <Effecting/>
 </div>


 </>
  )
}

export default App;
