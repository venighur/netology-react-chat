import React from 'react';
import { ComponentProps } from '../types';

function Typing({ from, message }: ComponentProps) {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name"><i className="fa fa-circle online"></i> {from.name}</span>
        <span className="message-data-time">{message.time}</span>
      </div>
      <div className="typing-message">
        <div className="typing-circle"></div>
        <div className="typing-circle opacity-75"></div>
        <div className="typing-circle opacity-50"></div>
      </div>
    </li>
  );
}

export default Typing;