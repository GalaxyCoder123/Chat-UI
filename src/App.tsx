import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.scss';
import { ChatComponent } from './ChatApp/chat';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ChatComponent />
      </header>
    </div>
  );
}

export default App;
