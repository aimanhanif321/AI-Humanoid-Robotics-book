import React, { useState } from 'react';
import ChatbotInterface from './ChatbotInterface';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="chat-widget-container">
      <div
        className={`chat-widget-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
      >
        {isOpen ? '❌' : '🤖'}
      </div>
      {isOpen && (
        <div className="chat-box-wrapper">
          <ChatbotInterface />
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
