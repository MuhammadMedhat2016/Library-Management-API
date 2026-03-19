# 🚀 Library Management API

[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748?logo=prisma)](https://www.prisma.io/)

This API is designed for managing libraries and the process of borrowing.

---

## 🛠 Features

* **Type-safe Database Access** with Prisma Client.
* **Automated Migrations** for version-controlled schema changes.
* **REST API** architecture for predictable endpoints.
* **Authentication & Authorization** using JWT and Guard Middlewares.
* **Rate Limiting** using express-rate-limiter.
* **Validation** using Joi to ensure data integrity.
* **Error Handling** with centralized middleware.

---

## ⚙️ Installation & Setup

Follow these steps to get your local development environment running.

### 1. Prerequisites
* **Node.js** (v18.x or higher)
* **Package Manager** (npm)
* **Database:** MySQL (Ensure your local instance is running)

### 2. Clone the Repository
```bash
git clone [https://github.com/MuhammadMedhat2016/Library-Management-API.git](https://github.com/MuhammadMedhat2016/Library-Management-API.git)
cd Library-Management-API
```
### 3. Install Dependancies
```
npm install
```
### 4. Set up environment variables
```
DATABASE_URL="mysql://username:password@host:3306/library"
DATABASE_HOST=localhost
DATABASE_USER=username
DATABASE_PASSWORD=password
DATABASE_NAME=library
MODE=DEVELOPMENT
JWT_SECRET=this_is_my_very_long_secret
JWT_EXPIRES_IN=1d
```
### 5. Initialize Prisma
```
npx prisma generate
npx prisma migrate dev --name init
```
### 6. Start the Server
```
npm run start
```
### 7. Import Postman Collection
```
import postman collection exported in the project folder to request
```
