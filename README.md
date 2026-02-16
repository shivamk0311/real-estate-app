# 🏡 EliteEstates — MERN Real Estate Marketplace (AWS Deployed)

EliteEstates is a production-ready full-stack real estate marketplace built using the **MERN stack (MongoDB, Express, React, Node.js)** and deployed on **AWS EC2**.

The platform allows users to create, browse, search, and manage property listings with secure authentication, Google OAuth integration, and scalable cloud deployment.

The application is fully **containerized using Docker and Docker Compose** and now runs in production on an AWS EC2 instance, integrated with **GitHub Actions CI/CD pipelines** for 

automated builds and deployments.

---

# 🌍 Live Deployment

🚀 **Production Environment:** Hosted on AWS EC2  
🐳 Fully containerized with Docker  
🔁 Automated CI/CD using GitHub Actions
🔒 Secure environment-based configuration  

---

# 🚀 Features

## 👤 Authentication
- Secure JWT-based authentication
- Google OAuth integration via Firebase
- Protected routes
- Persistent login sessions using HTTP-only cookies
- Secure cookie handling in production

## 🏠 Listings
- Create, update, and delete property listings
- Upload multiple property images
- Property types (Rent / Sale)
- Offer pricing support
- Swiper-based image slider
- User-specific listing dashboard

## 🔎 Search & Filtering
- Filter by:
  - Type (Rent / Sale)
  - Offer
  - Bedrooms
  - Bathrooms
- Dynamic query-based filtering
- Real-time filtered results

## 🛠 Backend
- RESTful API architecture
- MongoDB with Mongoose ODM
- Express middleware (CORS, cookies, JSON parsing)
- Environment-based configuration
- Production-ready CORS setup
- Secure cookie + JWT auth strategy

## 🐳 DevOps & Cloud
- Docker
- Docker Compose
- AWS EC2 (Ubuntu)
- GitHub Actions (CI/CD)
- Linux server deployment

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

## DevOps & Cloud
- Docker
- Docker Compose
- AWS EC2 (Ubuntu)
- Linux-based deployment
- Environment-based configs

---

# 📁 Project Structure

```
mern-estate/
│
├── api/
├── client/
├── docker-compose.yml
├── .github/
│   └── workflows/
│       └── deploy.yml
├── README.md
└── .gitignore
```

---

# ⚙️ Environment Variables

## Backend (`api/.env`)

### Production (AWS EC2)

```env
MONGO=mongodb://mongo:27017/realestate
JWT_SECRET=your_production_secret
NODE_ENV=production
```

### Local Development

```env
MONGO=mongodb://localhost:27017/realestate
JWT_SECRET=your_secret_key
NODE_ENV=development
```

---

## Frontend (`client/.env`)

### Production

```env
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_API_URL=http://<EC2_PUBLIC_IP>:3000
```

### Local Development

```env
VITE_FIREBASE_API_KEY=your_firebase_key
VITE_API_URL=http://localhost:3000
```

---

# 🐳 Running the Application (Docker — Local)

## 1️⃣ Install Docker

Download Docker Desktop:

https://www.docker.com/products/docker-desktop/

Ensure Docker is running.

---

## 2️⃣ Build and Start

From project root:

```bash
docker compose up --build
```

---

## 3️⃣ Access

Frontend:
```
http://localhost:5173
```

Backend:
```
http://localhost:3000
```

---

## 4️⃣ Stop Containers

```bash
Ctrl + C
```

Remove containers:

```bash
docker compose down
```

Remove volumes:

```bash
docker compose down -v
```

---

# ☁️ AWS EC2 Deployment Steps (High Level)

1. Launch Ubuntu EC2 instance
2. Configure Security Groups (open ports 3000 / 5173 or 80)
3. SSH into EC2
4. Install Docker & Docker Compose
5. Clone repository
6. Configure production `.env` files
7. Run:

```bash
docker compose up -d --build
```

Application runs in detached production mode.

---

# 🌐 API Endpoints

## User Routes (Protected — JWT Required)

```
GET    /api/user/test
POST   /api/user/update/:id
DELETE /api/user/delete/:id
GET    /api/user/listings/:id
GET    /api/user/:id
```

## Auth Routes

```
POST   /api/auth/sign-in
POST   /api/auth/sign-up
POST   /api/auth/google
GET    /api/auth/sign-out
```

## Listing Routes

```
POST   /api/listing/create
GET    /api/listing/get
GET    /api/listing/:id
DELETE /api/listing/delete/:id
POST   /api/listing/update/:id
```

---

# 🔐 Production CORS Configuration

Example:

```js
app.use(cors({
  origin: [
    'http://localhost:5173',
    'http://<EC2_PUBLIC_IP>:5173'
  ],
  credentials: true
}));
```

---

# 📦 Docker Architecture

```
Service    | Port   | Description
-----------|--------|-------------------------
backend    | 3000   | Express API Server
frontend   | 5173   | React (Vite) App
mongo      | 27017  | MongoDB Database
```

All services communicate via Docker’s internal network.

---

# 🧠 Engineering Concepts Applied

- Full-stack MERN architecture
- JWT + cookie-based authentication
- Google OAuth integration
- Docker multi-container setup
- Internal Docker networking
- AWS EC2 cloud deployment
- GitHub Actions CI/CD automation
- Environment-based production configuration
- Secure CORS handling

---

# 👨‍💻 Author

Shivam Khokhani  
Full Stack Developer   

---

# ⭐ Support

If you found this project helpful, feel free to star the repository!
