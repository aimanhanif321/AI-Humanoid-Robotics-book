import React from 'react';
import Layout from '@theme/Layout';
import ChatbotInterface from '../components/ChatbotInterface';

function ChatbotPage() {
  return (
    <Layout title="Chatbot" description="Chat with the AI-Humanoid Robotics Book">
      <main>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem 0',
          minHeight: '80vh',
        }}>
          <ChatbotInterface />
        </div>
      </main>
    </Layout>
  );
}

export default ChatbotPage;
