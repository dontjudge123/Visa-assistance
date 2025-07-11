#!/bin/bash
echo "Installing dependencies..."
npm install
cd frontend && npm install
cd ../backend && npm install