# OG-kissan-kart

Kissan Cart is a farmer-first e-commerce experience where growers can list fresh produce, share their farming story, and connect directly with buyers.

## What is included
- A polished landing page for the marketplace
- A product showcase for fresh crops and produce
- A farmer story section that highlights the land and farming journey
- A simple seller form to create a harvest listing

## Run locally (Full stack)
1. Create MySQL database:
   - database name: `kissan_cart`
2. Configure backend env:
   - Copy `server/.env.example` to `server/.env`
   - Update `DB_HOST, DB_USER, DB_PASSWORD, DB_NAME`
3. Install backend dependencies:
   - `cd server && npm install`
4. Start backend:
   - `cd server && npm run dev`
5. Visit:
   - http://127.0.0.1:3000

## API (used by the dashboard)
- POST   `/api/auth/register`
- POST   `/api/auth/login`
- GET    `/api/listings`
- GET    `/api/listings/me`
- POST   `/api/listings`

