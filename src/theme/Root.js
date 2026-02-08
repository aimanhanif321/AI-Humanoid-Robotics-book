import React from 'react';
import ChatWidget from '../components/ChatWidget';

// This component wraps every page in your Docusaurus site
export default function Root({ children }) {
  return (
    <>
      {children}
      <ChatWidget />
    </>
  );
}
