# Task Manager Web App

A simple full-stack Task Management Web Application built with Node.js, Express, MongoDB, and vanilla JavaScript. This app allows you to add, update, and delete tasks, set task status (Pending, In Progress, Completed), and stores all tasks persistently in MongoDB. It has a clean, responsive, and modern UI.

![Task Manager Demo](Preview.mp4)

## Features

- Add, update, and delete tasks
- Set task status: Pending, In Progress, Completed
- Tasks stored in MongoDB
- Responsive, modern UI

## Folder Structure

task-manager/
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── app.js
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
└── Preview.mp4
├── .gitignore
└── README.md



## Setup

1. Clone the repository:

git clone https://github.com/<your-username>/task-manager.git
cd task-manager

2. Backend setup:

cd backend
npm install

Create a `.env` file in `backend/`:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start backend server:

npm run dev

Server runs at http://localhost:5000.

3. Frontend setup:

Open `frontend/index.html` in your browser.  
Make sure `frontend/script.js` has:

const API_URL = 'http://localhost:5000/api/tasks';

## Deployment

- Backend: Deploy to Render or similar service  
- Frontend: Deploy to Netlify or Vercel  
- Update `API_URL` in `frontend/script.js` to point to deployed backend URL

## License

MIT License © `<Manasi Gade>`
