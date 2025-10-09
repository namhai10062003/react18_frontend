# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# ⚛️ React 18 Frontend (Vite Setup)

This project is the **frontend** for the React 18 + Node.js fullstack system.  
It is built with **Vite**, using **React 18**, **Axios**, and **Redux Toolkit** for state management.

---

## 🛠 Technology Stack

| Category | Tech |
|-----------|------|
| Frontend Framework | React 18 |
| Bundler | Vite |
| State Management | Redux Toolkit |
| Routing | React Router DOM |
| HTTP Client | Axios |
| UI Library (optional) | Ant Design / Material UI |
| Language | JavaScript (ES6+) |

---

## 📁 Folder Structure

| Path | Description |
|------|--------------|
| `frontend/public/` | Public static files |
| `frontend/src/` | Main source code folder |
| ├── `assets/` | Static images & icons |
| ├── `components/` | Reusable components (Button, Navbar, etc.) |
| ├── `features/` | Feature-based modules (Auth, User, etc.) |
| ├── `hooks/` | Custom React hooks |
| ├── `pages/` | Page components (Home, Login, Dashboard, etc.) |
| ├── `services/` | API service (axios config, API calls) |
| ├── `store/` | Redux store setup |
| ├── `utils/` | Utility & helper functions |
| ├── `App.jsx` | Root component |
| └── `main.jsx` | Application entry |
| `.gitignore` | Ignore files for Git |
| `index.html` | Main HTML file |
| `package.json` | Project dependencies & scripts |
| `vite.config.js` | Vite configuration |
| `README.md` | Project documentation |


---

## ⚙️ Setup & Run

### 1️⃣ Clone Repository

```bash
git clone https://github.com/namhai10062003/react18_frontend.git
cd react18_frontend

2️⃣ Install Dependencies
npm install

3️⃣ Start Development Server
npm run dev

---
## ⚙️ Environment Variables (.env)

VITE_API_URL=http://localhost:3000/api

## Code mà dùng gọi env api cho dễ là import nha

import.meta.env.VITE_API_URL
