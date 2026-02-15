# 🏡 EliteEstates — MERN Real Estate Marketplace

EliteEstates is a full-stack real estate marketplace application built using the **MERN stack (MongoDB, Express, React, Node.js)**.

The platform allows users to create, browse, search, and manage property listings with secure authentication and Google OAuth integration.

The entire application is fully **containerized using Docker and Docker Compose** for seamless local development and deployment.

---

## 🚀 Features

### 👤 Authentication
- Secure JWT-based authentication
- Google OAuth integration via Firebase
- Protected routes
- Persistent login sessions using cookies

### 🏠 Listings
- Create, update, and delete property listings
- Upload multiple property images
- Property types (Rent / Sale)
- Offer pricing support
- Swiper-based image slider
- User-specific listing management

### 🔎 Search & Filtering
- Filter by:
  - Type (Rent / Sale)
  - Offer
  - Bedrooms
  - Bathrooms
- Dynamic query-based search
- Real-time filtered results

### 🛠 Backend
- RESTful API architecture
- MongoDB with Mongoose ODM
- Express middleware (CORS, cookies, JSON parsing)
- Environment-based configuration
- Secure cookie handling

### 🐳 DevOps
- Fully containerized using Docker
- Multi-container architecture:
  - Frontend (Vite + React)
  - Backend (Node + Express)
  - MongoDB
- Docker internal networking between services
- Environment separation for local & containerized development

---

# 🏗 Tech Stack

## Frontend
- React (Vite)
- TailwindCSS
- React Router
- Redux Toolkit
- Swiper.js
- Firebase (Google OAuth)

## Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Cookie Parser
- CORS

## DevOps
- Docker
- Docker Compose

---

## 📁 Project Structure

```
mern-estate/
│
├── api/                      # Backend (Node + Express)
│   ├── controllers/          # Route controllers
│   ├── models/               # Mongoose schemas
│   ├── routes/               # API route definitions
│   ├── utils/                # Helper utilities (auth, error handlers, etc.)
│   ├── index.js              # Express entry point
│   ├── Dockerfile            # Backend container config
│   ├── package.json
│   └── .env
│
├── client/                   # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/       # Reusable UI components
│   │   ├── pages/            # App pages (Home, SignIn, etc.)
│   │   ├── redux/            # Redux state management
│   │   ├── utils/            # API helper functions
│   │   ├── firebase.js       # Firebase configuration
│   │   └── main.jsx
│   ├── Dockerfile            # Frontend container config
│   ├── package.json
│   └── .env
│
├── docker-compose.yml        # Multi-container orchestration
├── README.md
└── .gitignore
```


---

# ⚙️ Environment Variables

## Backend (`api/.env`)

For Docker:

```env
MONGO=mongodb://localhost:27017/realestate
JWT_SECRET=your_secret_key
``` 

For local development:

```env
MONGO=mongodb://mongo:27017/realestate
JWT_SECRET=your_secret_key
```  

---

## Frontend (`client/.env`)

For local development:

```env
VITE_FIREBASE_API_KEY=your_firebase_key  
VITE_API_URL=http://localhost:3000  
```
For Docker:

```env
VITE_API_URL=http://backend:3000  
```
---

# 🐳 Running the Application (Docker — Recommended)

## 1️⃣ Install Docker

Download and install Docker Desktop:

```env
https://www.docker.com/products/docker-desktop/
```
Make sure Docker is running before continuing.

---

## 2️⃣ Build and Start Containers

From the project root directory:

```env
docker compose up --build
```

This will:

- Build frontend container
- Build backend container
- Pull MongoDB image
- Create Docker network
- Start all services

---

## 3️⃣ Access the Application

Frontend: 
```env
http://localhost:5173  
```
Backend:  
```env
http://localhost:3000  
```

MongoDB:  
```env
mongodb://localhost:27017  
```
---

## 4️⃣ Stop Containers

Press:

```env
Ctrl + C
```

To completely remove containers:

```env
docker compose down
```

To remove volumes as well:

```env
docker compose down -v
```
---

# 🖥 Running Without Docker (Manual Setup)

## Step 1: Start MongoDB locally

Ensure MongoDB is installed and running on:

```env
mongodb://localhost:27017  
```
---

## Step 2: Start Backend

```env
cd api  
npm install  
npm run dev  
```

Backend will run on:  
```env
http://localhost:3000  
```
---

## Step 3: Start Frontend

```env
cd client  
npm install  
npm run dev  
```

Frontend will run on:
```env
http://localhost:5173  
```

---

# 🌐 API Endpoints

## User Routes

(Protected — requires JWT cookie)

```env
GET    /api/user/test
POST   /api/user/update/:id
DELETE /api/user/delete/:id
GET    /api/user/listings/:id
GET    /api/user/:id
```

## Auth Routes

```env
POST   /api/auth/sign-in  
POST   /api/auth/sign-up  
POST   /api/auth/google  
GET    /api/auth/sign-out  
```

## Listing Routes

```env
POST   /api/listing/create  
GET    /api/listing/get  
GET    /api/listing/:id  
DELETE /api/listing/delete/:id  
POST   /api/listing/update/:id  
```
---

# 🔐 CORS Configuration

Backend CORS configuration:

```env
app.use(cors({
  origin: ['http://localhost:5173'],
  credentials: true
}));
```

This enables secure cross-origin cookie-based authentication.

---

# 📦 Docker Architecture

```env
Service   | Port   | Description  
----------|--------|------------------------  
backend   | 3000   | Express API Server  
frontend  | 5173   | React (Vite) App  
mongo     | 27017  | MongoDB Database  
```

All services communicate through Docker’s internal network.

---

# 🧠 Key Engineering Concepts Applied

- Full-stack MERN architecture  
- JWT-based authentication  
- Google OAuth with Firebase  
- Multi-container Docker setup  
- Service-based internal networking  
- Environment-specific API configuration  
- CORS handling for secure cross-origin requests  

---

# 📌 Future Improvements

- Production Docker build using Nginx  
- CI/CD integration  
- Pagination for listings  
- Role-based access control  
- Automated testing  
- Deployment to AWS / Render  

---

# 👨‍💻 Author

Shivam Khokhani  
Full Stack Developer  

---

# ⭐ Support

If you found this project helpful, feel free to star the repository!
