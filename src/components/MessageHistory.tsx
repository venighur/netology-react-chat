import React from 'react';
import Message from './Message';
import Response from './Response';
import Typing from './Typing';
import { MessageType } from '../types';

type MessageHistoryProps = {
  list: MessageType[];
}

function MessageHistory({ list = [] }: MessageHistoryProps) {
  return (
    <>
      {list && <ul>
        {list.map(message => {
          if (message.type === 'message') {
            return <Message key={message.id} from={message.from} message={message} />
          } else if (message.type === 'response') {
            return <Response key={message.id} from={message.from} message={message} />
          }
          return <Typing key={message.id} from={message.from} message={message} />
        })}
      </ul>}
    </>
  );
}

export default MessageHistory;