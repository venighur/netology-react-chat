import React from 'react';
import './App.css';
import MessageHistory from './components/MessageHistory';
import { messages } from './messages';
import { MessageType } from './types';

function App() {
  return (
    <div className="clearfix container">
      <div className="chat">
        <div className="chat-history">
          <MessageHistory list={messages as MessageType[]} />
        </div>
      </div>
    </div>
  );
}

export default App;
