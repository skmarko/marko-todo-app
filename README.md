> **Node.js Version:** 20+ recommended 

## 🧰 Tech Stack All Code In Master branch

| Layer | Technology |
|-------|-------------|
| **Frontend** | Next.js (React), Tailwind CSS, SweetAlert2, jwt-decode |
| **Backend** | Node.js, Express.js, Axios, dotenv, CORS, jsonwebtoken

🌐 Frontend (Next.js)
User login & authentication
Auto logout after inactivity (with popup warning)
Countdown alert using SweetAlert2
Responsive, modern UI built with Tailwind CSS
Secure JWT token handling using jwt-decode

Installation & Setup steps
1. git clone repo
2. cd mern-todo-auto-logout/frontend
3. npm install 
 npm install sweetalert2 (if sweetalert error show)
4. Create a .env.local File and copy past (if not exist)
NEXT_PUBLIC_API_URL=http://localhost:5000/api
NEXT_PUBLIC_IDLE_TIMEOUT=600000 
5. Run the App
npm run dev

⚙️ Backend (Express.js)

Uses DummyJSON API as a fake backend for authentication and todos
Acts as a proxy API between frontend and DummyJSON
Handles JWT-based authentication
Middleware for token verification and user validation
Environment variable management with .env


### 1️⃣ Clone the Repository
1. git clone repo
2. cd mern-todo-auto-logout/backend
3. npm install
4. Create a .env File (if not exist)
PORT=5000
JWT_SECRET=supersecret
DUMMYJSON_BASE_URL=https://dummyjson.com
5. npm start

