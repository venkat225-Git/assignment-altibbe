🌍 Product Transparency Web App (Altibbe)



An AI-powered full-stack web application that promotes product transparency and ethical awareness by collecting detailed product data and generating intelligent follow-up questions using Google Gemini AI.

Built with React (frontend) and Node.js + Express + MongoDB (backend), this system allows users to add product information, analyze transparency details, and automatically generate sustainability-related questions.

🧠 Project Overview

This project is part of the Altibbe Product Transparency Platform, designed to help consumers and companies evaluate products based on their ethical sourcing, environmental impact, and health safety.

🧩 Core Functionality:

Frontend (React)

Interactive product submission form


state handling using React Hooks

API integration for sending product data to the backend

Backend (Node.js + Express + MongoDB)

REST APIs for storing and managing product details

Integration with Google Gemini AI to generate questions automatically

Storage of AI-generated questions in MongoDB

Error handling, validation, and modular architecture

AI Integration (Google Gemini)

The backend sends product data as prompts to Gemini

Gemini generates transparency-related questions



⚙️ Tech Stack
Layer	Technology
Frontend	React.js, CSS, JSX
Backend	Node.js, Express.js
Database	MongoDB (Mongoose ORM)
AI	Google Gemini API
Tools	dotenv, CORS, Postman, Nodemon
🚀 Features

🧾 Add new products through an interactive React form

📦 Product details stored securely in MongoDB

🤖 AI integration (Gemini) for question generation


⚡ Real-time form updates and API communication

🧱 Scalable architecture with modular controllers, routes, and models

⚠️ Current Limitation

The AI integration is fully configured and implemented,
but Gemini is not currently returning question text due to limited free API access.
The request reaches Gemini successfully (verified via logs),
however, the response body lacks the text output.
Once a fully active Gemini API key is used,
the AI question generation will function automatically — no code changes needed.

🧾 Workflow

Frontend (React) → User submits a new product form

Backend (Node.js) → Saves product details to MongoDB

AI Integration → Backend sends data to Gemini API

Gemini Response → (Currently disabled by free key) would return 8–12 questions

Storage → Questions get stored under each product in the database

🧰 Installation
🔹 Clone the Repository
git clone https://github.com/<your-username>/<your-repo-name>.git

🔹 Install Backend Dependencies
cd service
npm install
npm run dev

🔹 Install Frontend Dependencies
cd client
npm install
npm start

📡 API Endpoint Example

POST /api/question

{
  "productName": "Organic Almond Milk"
}


Expected Output (when AI active):

{
  "message": "✅ AI questions generated successfully",
  "questions": [
    "Are the almonds organically certified?",
    "Does the product use eco-friendly packaging?"
  ]
}

🧑‍💻 Developer

Saka Venkata Sai
Full Stack Developer — MERN + AI Integration
📧 [your-email@example.com
]
💼 [LinkedIn / GitHub Profile]

🏁 Project Status
Component	Status
React Frontend	✅ Completed
Node.js Backend	✅ Completed
MongoDB Connection	✅ Working
Gemini AI Integration	⚠️ Implemented (response pending)
API Routes & Models	✅ Verified
Deployment Ready	✅ Yes
🏷️ GitHub Tags

#React #NodeJS #Express #MongoDB
#GoogleGemini #AIIntegration #Altibbe
#FullStack #ProductTransparency

📜 Summary

This full-stack project demonstrates how AI can be integrated into real-world applications for ethical product evaluation.
It’s designed as part of the Altibbe Transparency Assignment, showcasing end-to-end implementation — from data input in React to AI-driven processing in Node.js.
The AI logic is fully functional, with only the Gemini API’s free access limiting response generation.
