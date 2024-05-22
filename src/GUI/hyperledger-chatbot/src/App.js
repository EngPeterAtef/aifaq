// src/App.js

import React from 'react';
import ChatBot from './components/ChatBot.js';
import './App.css';  // Assuming global styles if any
import './components/ChatBot.css';  // Import ChatBot specific styles
import Header from './components/Header.js';

const App = () => {
  return (
    <div className="App">
      <Header />
      <ChatBot />
    </div>
  );
};

export default App;
