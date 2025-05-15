# 💻 MERN Stack Code Editor

A full-featured, web-based code editor built using the MERN stack (MongoDB, Express.js, ReactJS, Node.js), integrated with Monaco Editor and the Compilex package. This application supports multi-language code execution, real-time collaboration, syntax highlighting, and more — offering developers an intuitive and efficient platform to write, share, and run code in the browser.

---

## 🚀 Features

- **📝 Monaco Editor Integration**  
  Experience VS Code-like editing with syntax highlighting, IntelliSense, and language support.

- **🧠 Multi-language Support**  
  Run code in multiple programming languages including C, C++, Java, and Python using the Compilex npm package.

- **🤝 Real-time Collaboration**  
  Collaborate with others live in the same editor session using WebSocket-based communication.

- **💾 Code Persistence**  
  Save and retrieve code using MongoDB to manage sessions and history.

- **⚙️ Efficient Code Execution**  
  Optimized backend to handle fast, secure, and scalable code execution.

---

## 🛠️ Tech Stack

| Layer         | Technology             |
|---------------|-------------------------|
| Frontend      | ReactJS, Monaco Editor  |
| Backend       | Node.js, Express.js     |
| Database      | MongoDB                 |
| Execution Engine | Compilex             |
| Real-Time      | WebSockets / Socket.IO |

---

## 📂 Project Structure

CodeEditor/
├── public/ # Static assets (images, icons, etc.)
│ ├── CideMaster.svg
│ ├── CodeMaster.png
│ ├── code.svg
│ ├── java.png
│ ├── python.png
│ └── vite.svg

├── src/ # Source code
│ ├── assets/ # Additional assets (e.g., images, styles)
│ ├── backend/ # Backend logic (e.g., API calls, compile functions)
│ ├── components/ # React components
│ ├── App.css
│ ├── App.jsx # Root React component
│ ├── index.css
│ ├── lang.js # Language config for the editor
│ └── main.jsx # Entry point

├── .eslintrc.cjs # ESLint configuration
├── .gitignore # Git ignored files
├── README.md # Project documentation
├── index.html # HTML template
├── package.json # NPM dependencies
├── package-lock.json # Dependency lock file
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS config
├── vite.config.js # Vite build config

yaml
Copy
Edit
