#!/bin/bash
echo "🔍 Testing EchoLink services..."

echo "📡 Checking running containers..."
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo "🔎 Checking backend API..."
curl -s http://localhost:3000/ | jq . || echo "❌ Backend not responding!"

echo "📡 Checking WebSocket connection..."
if command -v wscat &> /dev/null
then
    wscat -c ws://localhost:3000
else
    echo "⚠️ wscat is not installed. Install it with 'npm install -g wscat'"
fi

echo "✅ All tests completed!"
