import React from 'react';
import './ChatLog.css';
import ChatEntry from './ChatEntry.js';

const ChatLog = (props) => {

  const messages = props.messages

  const messageComponents = messages.map((message, i) => {
    return (
      <section key={i}>
        <ChatEntry
          sender = {message.sender}
          body = {message.body}
          timestamp = {message.timeStamp}
        />
      </section>
    )
  })
  
  return(
    <section className="chat-log">
        {messageComponents}
    </section> 
  )
}



export default ChatLog;