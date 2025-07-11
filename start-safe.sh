#!/bin/bash

echo "⏳ Checking for installed dependencies..."

# Check frontend
if [ ! -d "frontend/node_modules" ]; then
  echo "❌ Dependencies not installed in /frontend. Installing..."
  cd client && npm install && cd ..
else
  echo "✅ /frontend dependencies are ready."
fi

# Check backend
if [ ! -d "backend/node_modules" ]; then
  echo "❌ Dependencies not installed in /backend. Installing..."
  cd backend && npm install && cd ..
else
  echo "✅ /backend dependencies are ready."
fi

echo "🚀 Starting both frontend and backend..."
npx concurrently "cd frontend && npm start" "cd backend && node server.js"