# AI Recipe Generator

## 🚀 Overview
This project is a full-stack **AI-powered recipe generator** that lets users:

- Register / login via JWT-authenticated API
- Generate cooking recipes using Google Gemini (GenAI) based on a dish name + list of ingredients
- Store user data in MongoDB
- Protect routes with token authentication and support logout via token blacklisting

The project is split into two folders:

- `client/` – React + Vite frontend
- `server/` – Express + MongoDB backend with GenAI integration

---

## 🧱 Project Structure

### `client/` (Frontend)
- Built with **React (v19)** + **Vite**
- Uses **Tailwind CSS** + **Flowbite** for UI components
- Includes pages for login, signup, and recipe generation

### `server/` (Backend)
- Built with **Express** and **MongoDB (Mongoose)**
- Routes:
  - `POST /api/auth/register` – Register new user
  - `POST /api/auth/login` – Login user
  - `DELETE /api/auth/logout` – Logout (token blacklist)
  - `POST /api/auth/profile` – Get user profile (requires auth)
  - `GET /api/data/content` – Generate recipe (requires auth)
- Integrates **Google Gemini (GenAI)** via `@google/genai`

---

## 🛠️ Prerequisites

- Node.js (>= 18)
- npm
- A running MongoDB instance (Atlas or local)
- Google Gemini API key (set as `GEMINI_API_KEY`)

---

## ⚙️ Environment Variables
Create a `.env` file in `server/` with at least the following variables:

```env
MONGODB_URI=<your-mongodb-connection-string>
JWT_SECRET=<your-jwt-secret>
GEMINI_API_KEY=<your-google-gemini-api-key>
PORT=5000
```

---

## ▶️ Run the Project (Development)

### 1) Start the backend
```bash
cd server
npm install
npm run dev
```

### 2) Start the frontend
```bash
cd client
npm install
npm run dev
```

Then open the URL shown by Vite (usually `http://localhost:5173`). The frontend will call the backend on `http://localhost:5000` by default.

---

## ✅ Notes

- Auth tokens are stored in **HTTP-only cookies** and also returned in the response body.
- The `GET /api/data/content` route requires a valid JWT cookie.
- The AI recipe generation uses Google Gemini’s `gemini-3-flash-preview` model.

---

## 🧩 Next Improvements (ideas)
- Add a UI for viewing / saving generated recipes
- Add a shopping list / ingredient inventory feature
- Add tests and improved error handling
- Add rate limiting and stronger token invalidation

