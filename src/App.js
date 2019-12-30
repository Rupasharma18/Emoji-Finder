import React from 'react';
import './App.css';
import Header from './components/header';
import EmojiList from './components/Emojilist'
import Ribbon from './components/forkRibbon';

function App() {
  return (
    <div className="App">
      <Header/>
      <EmojiList/>
      <Ribbon/>
    </div>
  );
}

export default App;
