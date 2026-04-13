# Full-Stack NestJS + Next.js Authentication System

This project features a complete authentication system with email/password and Google Sign-In.

## Project Structure
- `backend/`: NestJS API handles authentication, user management, and JWT issuance.
- `frontend/`: Next.js application provides a premium user interface for login, registration, and a protected dashboard.

## Features
- **Register & Login**: Traditional email/password authentication using bcrypt for hashing.
- **Google Sign-In**: Social login integration using Passport's Google OAuth 2.0 strategy.
- **JWT Protection**: Secure API endpoints using JSON Web Tokens.
- **Premium UI**: Modern dark-themed design with Framer Motion animations and Lucide icons.
- **Database**: MongoDB integration via Mongoose.

## Getting Started

### 1. Backend Setup
1. Open `Nest/backend/.env`.
2. Provide your `MONGODB_URI`.
3. Provide your `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
4. Run commands:
   ```bash
   cd backend
   npm run start:dev
   ```

### 2. Frontend Setup
1. Open `Nest/frontend/.env.local`.
2. Ensure `NEXT_PUBLIC_API_URL` points to your backend (default: `http://localhost:3000/api`).
3. Run commands:
   ```bash
   cd frontend
   npm run dev
   ```

## API Endpoints
- `POST /api/auth/register`: Create a new user.
- `POST /api/auth/login`: Authenticate and receive a JWT.
- `GET /api/auth/google`: Initiate Google OAuth flow.
- `GET /api/auth/google/callback`: Handle Google OAuth callback.
- `GET /api/auth/profile`: Get the current authenticated user's profile (Requires Bearer Token).
