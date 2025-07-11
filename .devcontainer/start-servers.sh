#!/bin/bash
# Start servers with logging
echo "Starting servers..."
npx concurrently \
  -k \
  -n "FRONTEND,BACKEND" \
  -c "bgBlue.bold,bgGreen.bold" \
  "cd frontend && npm start" \
  "cd backend && node server.js" \
  > /workspace/server-logs.txt 2>&1 &

# Wait for servers to start
sleep 5
echo "Servers started! Check server-logs.txt for details"