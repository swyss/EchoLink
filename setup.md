# EchoLink - Setup & Start Guide

## 📌 Overview
This document provides step-by-step instructions for setting up, starting, and verifying the EchoLink components using Docker.

---
## 🚀 Starting the EchoLink System
### **1️⃣ Start all Docker containers**
Run the following command from the `test-environment` directory:
```bash
cd test-environment
./start-echolink.sh
```

Alternatively, run manually:
```bash
docker-compose up --build -d
```

This will start:
- **Asterisk PBX** (`echolink-asterisk`)
- **Backend (Express.js)** (`echolink-backend`)
- **Client (ElectronJS)** (`echolink-client`)

---
## ✅ Verifying Component Status
### **2️⃣ Check running containers**
To check if all containers are running:
```bash
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
```
Expected output:
```
echolink-asterisk   Up X minutes   5060/udp, 5061/tcp, 8089/tcp
echolink-backend    Up X minutes   3000/tcp
echolink-client     Up X minutes   (No external ports needed)
```

### **3️⃣ Check logs for errors**
```bash
docker logs echolink-asterisk | tail -n 20
docker logs echolink-backend | tail -n 20
docker logs echolink-client | tail -n 20
```

### **4️⃣ Test backend API**
Run:
```bash
curl http://localhost:3000/
```
Expected response:
```json
{ "message": "EchoLink Backend is running!" }
```

### **5️⃣ Test WebSocket Connection**
Open WebSocket connection manually:
```bash
wscat -c ws://localhost:3000
```
Expected response:
```
{"message":"Welcome to EchoLink WebSocket!"}
```

---
## 🔄 Restart & Stop Services
### **Restart a specific container**
```bash
docker restart echolink-backend
```

### **Stop all containers**
```bash
cd test-environment
docker-compose down
```

---
## 🛠️ Troubleshooting
### **Check for errors**
```bash
docker ps -a  # Check exited containers
docker logs echolink-backend | tail -n 50  # Backend logs
docker logs echolink-asterisk | tail -n 50  # Asterisk logs
```

### **Rebuild all containers**
```bash
cd test-environment
docker-compose down
docker system prune -a # DANGER
docker-compose up --build -d
```

---