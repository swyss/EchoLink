#!/bin/bash
echo "🚀 Starting EchoLink containers..."
docker-compose up --build -d
echo "✅ All containers started!"

echo "📡 Checking container statuses..."
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo "🔍 Checking logs for errors..."
docker logs echolink-asterisk | tail -n 10
docker logs echolink-backend | tail -n 10
docker logs echolink-client | tail -n 10

echo "✅ System is up and running!"
