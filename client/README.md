# EchoLink

## Overview
EchoLink is a VoIP-based communication hub designed for seamless integration with Microsoft Teams. It acts as a central call distribution system that fairly routes incoming calls to team members while displaying real-time status updates in Teams.

## Features
- 📞 **VoIP Integration**: Supports Asterisk as the VoIP backend.
- 🔗 **Microsoft Teams Add-in**: Allows users to log in, manage their availability, and control the client app.
- 📡 **Call Routing System**: Distributes incoming calls among available team members.
- 🔄 **Real-time Status Sync**: Updates availability and call status within Microsoft Teams.
- 🚀 **ElectronJS Client**: A lightweight desktop application that receives and manages calls.
- 🖥️ **Auto-Start on Boot**: Ensures the client application runs when the PC starts.
- 🔍 **Monitoring & Logging**: Tracks call activity and system status.
- 🏢 **Multi-Team Support**: Scalable architecture allowing multiple teams with up to 15 users per team.

## Tech Stack
### **Server**
- **Node.js (Express.js)** – API backend for managing calls and Teams integration.
- **Asterisk** – Open-source VoIP PBX for call handling.
- **WebSockets** – For real-time communication between server and clients.

### **Client**
- **ElectronJS** – Cross-platform desktop application.
- **Microsoft Teams SDK** – Integration for user login, status, and call control.

### **Infrastructure & Deployment**
- **Docker** – Containerized development & deployment.
- **PM2** – Process management for the Node.js backend.

## Development Setup
### **Prerequisites**
- Node.js (>= 16)
- Asterisk PBX (installed and configured)
- ElectronJS
- Microsoft Teams Developer Account

### **Local Development Environment**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourrepo/echolink.git
   cd echolink
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the backend:
   ```bash
   npm run dev:server
   ```
4. Start the Electron client:
   ```bash
   npm run dev:client
   ```

### **Test Environment**
- **Dockerized Asterisk Server** – A test instance of Asterisk running inside Docker.
- **Mock Teams API** – A local test server simulating Teams API responses.
- **WebSocket Debugging Tool** – Used to inspect real-time events.

## Next Steps
- Implement Microsoft Teams authentication.
- Develop initial VoIP-to-Teams call routing.
- Refine Electron client UI and Teams integration.

---
🚀 Stay tuned for updates and contributions!

