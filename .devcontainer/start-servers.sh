#!/bin/bash
LOG_FILE="/workspaces/server-logs.txt"

echo "Starting servers..."
npx concurrently \
  -k \
  -n "FRONTEND,BACKEND" \
  -c "bgBlue.bold,bgGreen.bold" \
  "cd frontend && npm start" \
  "cd backend && node server.js" \
  > "$LOG_FILE" 2>&1 &

echo "✅ Servers started!"
echo "View logs: tail -f $LOG_FILE"
echo "Frontend: https://${CODESPACE_NAME}-3000.preview.app.github.dev"
echo "Backend: https://${CODESPACE_NAME}-5000.preview.app.github.dev"