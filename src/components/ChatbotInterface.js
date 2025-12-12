import React, { useState } from 'react';

function ChatbotInterface() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { type: 'user', text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/chatbot/query`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: input }),
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'bot', text: data.response },
        ]);
      } catch (e) {
        console.error("Error fetching citation:", e);
        setError("Failed to get response from API. Please try again.");
        setMessages((prevMessages) => [
          ...prevMessages,
          { type: 'error', text: "Error: Could not get citation." },
        ]);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chat-history">
        {messages.map((msg, index) => (
          <div key={index} className={`chat-message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="chat-message bot">Loading...</div>}
        {error && <div className="chat-message error">{error}</div>}
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleSendMessage();
            }
          }}
          placeholder="Type your message..."
          disabled={loading}
        />
        <button onClick={handleSendMessage} disabled={loading}>Send</button>
      </div>
    </div>
  );
}

export default ChatbotInterface;


// import React, { useState } from 'react';

// function ChatbotInterface() {
//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSendMessage = async () => {
//     if (input.trim()) {
//       const userMessage = { type: 'user', text: input };
//       setMessages((prevMessages) => [...prevMessages, userMessage]);
//       setInput('');
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch('http://localhost:8000/api/v1/chatbot/query', { // Assuming backend runs on 8000
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json',
//           },
//           body: JSON.stringify({ query: input }),
//         });

//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();
//         setMessages((prevMessages) => [...prevMessages, { type: 'bot', text: data.response }]);
//       } catch (e) {
//         console.error("Error fetching citation:", e);
//         setError("Failed to get response from API. Please try again.");
//         setMessages((prevMessages) => [...prevMessages, { type: 'error', text: "Error: Could not get citation." }]);
//       } finally {
//         setLoading(false);
//       }
//     }
//   };

//   return (
//     <div className="chatbot-container">
//       <div className="chat-history">
//         {messages.map((msg, index) => (
//           <div key={index} className={`chat-message ${msg.type}`}>
//             {msg.text}
//           </div>
//         ))}
//         {loading && <div className="chat-message bot">Loading...</div>}
//         {error && <div className="chat-message error">{error}</div>}
//       </div>
//       <div className="chat-input-area">
//         <input
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={(e) => {
//             if (e.key === 'Enter') {
//               handleSendMessage();
//             }
//           }}
//           placeholder="Type your message..."
//           disabled={loading}
//         />
//         <button onClick={handleSendMessage} disabled={loading}>Send</button>
//       </div>
//     </div>
//   );
// }

// export default ChatbotInterface;
