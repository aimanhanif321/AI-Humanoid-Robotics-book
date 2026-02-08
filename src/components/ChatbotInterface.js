import React, { useState, useEffect, useRef } from 'react';

function ChatbotInterface() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: "Hello! I'm your AI-Humanoid Robotics Book assistant. I can help you learn about Physical AI, ROS2, Isaac Sim, and more. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { type: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:8000/api/v1/chatbot/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: currentInput }),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      setMessages((prev) => [...prev, { type: 'bot', text: data.response }]);
    } catch (e) {
      console.error('Error:', e);
      setMessages((prev) => [
        ...prev,
        { type: 'error', text: 'Sorry, I encountered an error. Please try again.' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const suggestedQuestions = [
    'What is Physical AI?',
    'Tell me about ROS2',
    'What is Isaac Sim?',
    'Explain URDF files',
  ];

  return (
    <div className="chatbot-page-container">
      {/* Header */}
      <div className="chatbot-page-header">
        <div className="chatbot-page-avatar">
          <svg viewBox="0 0 24 24" fill="currentColor" width="32" height="32">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
        <div>
          <h1>AI Book Assistant</h1>
          <p>Ask me anything about AI-Humanoid Robotics</p>
        </div>
      </div>

      {/* Messages */}
      <div className="chatbot-page-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`chatbot-page-bubble ${msg.type}`}>
            {msg.type === 'bot' && (
              <div className="chatbot-page-bot-avatar">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                </svg>
              </div>
            )}
            <div className="chatbot-page-bubble-content">{msg.text}</div>
          </div>
        ))}

        {loading && (
          <div className="chatbot-page-bubble bot">
            <div className="chatbot-page-bot-avatar">
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
              </svg>
            </div>
            <div className="chatbot-page-bubble-content typing">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}

        {/* Suggested Questions */}
        {messages.length === 1 && (
          <div className="chatbot-page-suggestions">
            <p>Suggested questions:</p>
            <div className="suggestion-grid">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  className="chatbot-suggestion-btn"
                  onClick={() => setInput(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="chatbot-page-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button
          className="chatbot-send-btn"
          onClick={handleSendMessage}
          disabled={loading || !input.trim()}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ChatbotInterface;
