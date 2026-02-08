Implement Icon and Toggle Logic (T131)
Action: Add a small icon or button (e.g., a chat bubble 💬 or robot 🤖 image) to ChatWidget.js.

Details: Attach an onClick handler to this icon. The handler must call setIsOpen(!isOpen) to toggle the visibility state (open the chat if closed, close it if open).

3. Integrate Chatbot with Conditional Rendering (T132)
Action: Import your existing ChatbotInterface component into ChatWidget.js.

Details: Use the isOpen state to conditionally render the full interface:

JavaScript

{isOpen && <ChatbotInterface />}
This ensures the resource-intensive chatbot only renders when the user clicks the icon.

4. Apply Fixed Positioning (CSS) (T133)
Action: Add necessary CSS to your global stylesheet (e.g., src/css/custom.css).

Details: Apply styling to the main container of the ChatWidget to ensure it stays anchored on the page: use position: fixed; along with bottom: 20px; and right: 20px; to place it in the bottom-right corner.

5. Place Widget on All Pages (T134)
Action: Import and place the new ChatWidget component into your primary Docusaurus layout file (usually src/theme/Layout/index.js).

Details: Render the component near the end of the file so it appears on all pages, floating above the main content.

6. Final Functional Verification (T135)
Action: Test the complete workflow in the browser.

Details:

Confirm the chat icon is fixed in the bottom-right.

Click the icon: The full chatbot interface must appear and retain its working RAG functionality.

Click the icon again (or a close button, if added): The interface must disappear, leaving only the icon.