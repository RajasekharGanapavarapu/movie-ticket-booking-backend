# Movie Ticket Booking Backend

A Node.js + Express + MongoDB backend for a movie ticket booking platform.

## Features

- User authentication (register/sign-in)
- Movies CRUD
- Shows CRUD
- Bookings (seat selection, availability)
- User profile and bookings history
- Feedback API
- CORS for frontend integration

## Setup

1. Clone the repo
2. Run `npm install`
3. Create a `.env` with your MongoDB Atlas URI:
   ```
   PORT=4000
   MONGO_URI=your_mongodb_atlas_connection_string
   ```
4. Start the server:
   ```
   npm start
   ```
   or for dev mode:
   ```
   npm run dev
   ```

## API Endpoints

- `/api/users/register` — Register user
- `/api/users/login` — Sign in user
- `/api/users/:id/profile` — Get user profile & bookings
- `/api/movies` — Get/add movies
- `/api/movies/:id` — Get movie details
- `/api/shows/movie/:movieId` — Get shows for a movie
- `/api/shows` — Add show
- `/api/bookings` — Book tickets
- `/api/bookings/user/:userId` — Get user bookings
- `/api/feedback` — Submit/get feedback

---
