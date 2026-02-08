# AI-Humanoid Robotics Book

This repository contains the source code for the "AI-Humanoid Robotics Book", a Docusaurus-based book, and a RAG (Retrieval Augmented Generation) chatbot system.

## Getting Started

Follow these steps to set up and run the project locally.

### Prerequisites

*   Node.js (LTS version recommended)
*   Python 3.9+
*   pip (Python package installer)
*   npm (Node.js package manager)
*   Redis (for backend caching)

### Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/aimanhanif321/AI-Humanoid-Robotics-Book.git
    cd AI-Humanoid-Robotics-Book
    ```

2.  **Install Frontend Dependencies:**
    ```bash
    npm install
    ```

3.  **Install Backend Dependencies:**
    ```bash
    pip install -r backend/requirements.txt
    ```

4.  **Set up Environment Variables (for Backend):**
    Create a `.env` file in the `backend/` directory based on `backend/.env.example`.
    ```
    # .env
    HOST=0.0.0.0
    PORT=8000
    WORKERS=4
    CORS_ORIGIN=http://localhost:3000
    LOG_LEVEL=info
    COHERE_API_KEY=YOUR_COHERE_API_KEY # Get from Cohere website
    QDRANT_URL=http://localhost:6333 # Or your Qdrant instance
    QDRANT_API_KEY=YOUR_QDRANT_API_KEY # If Qdrant requires an API key
    OPENAI_API_KEY=YOUR_GEMINI_API_KEY # Or your Gemini API key for agents
    ```

5.  **Start Redis Server:**
    Ensure a Redis server is running, as it's used for caching in the backend. You can run it locally or use a Docker container.

6.  **Run Qdrant (Vector Database):**
    Ensure a Qdrant instance is running. You can run it locally or via Docker.
    For example, using Docker:
    ```bash
    docker run -p 6333:6333 -p 6334:6334 \
        -v $(pwd)/qdrant_storage:/qdrant/storage \
        qdrant/qdrant
    ```

7.  **Ingest Book Content into Qdrant (RAG Data):**
    This step populates the Qdrant vector database with the book's content, which the RAG chatbot will use for retrieval.
    ```bash
    python rag/main.py
    ```

## Running the Project

To start both the frontend (Docusaurus) and backend (FastAPI) simultaneously:

```bash
npm run dev:all
```

This command will:
*   Start the Docusaurus development server (frontend) on `http://localhost:3000`.
*   Start the FastAPI backend server on `http://localhost:8000`.

Open your browser and navigate to `http://localhost:3000` to view the book website.
To interact with the chatbot, navigate to `http://localhost:3000/chatbot`.

## Functional Chatbot Verification

1.  Ensure both frontend and backend are running using `npm run dev:all`.
2.  Open your browser to `http://localhost:3000/chatbot`.
3.  Type a question related to the book's content into the chatbot's input field (e.g., "What is Physical AI?").
4.  Verify that the chatbot responds with a generated answer based on the book's content.
5.  Check your browser's Developer Console (Network tab) to confirm that the API request to `http://localhost:8000/api/v1/chatbot/query` returns a successful 200 HTTP status code.

---
**Note:** Task 89 (Integrate T006 Citation Logic) was cancelled due to an inability to access the specified file for its content. The citation endpoint (`/api/v1/cite`) currently returns a placeholder.
