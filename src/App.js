import React from 'react';
import './App.css';

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
  return (
    <div className='container'>
      <h1 id={greeting}>hello, world</h1>
      <p>i am writing jsx syntax</p>
      <ul>
        {/* <li>
          <button onClick={DisplayEmojiName}>
            <span role="img" aria-label="grinning face" id="grinning">😀</span>
          </button>
        </li>
        <li>
          <button onClick={DisplayEmojiName}>
            <span role="img" aria-label="party popper" id="party">🎉</span>
          </button>
        </li>
        <li>
          <button onClick={DisplayEmojiName}>
            <span role="img" aria-label="woman dancing" id="dancing">💃</span>
          </button>
        </li> */}

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
  );
}

export default App;
