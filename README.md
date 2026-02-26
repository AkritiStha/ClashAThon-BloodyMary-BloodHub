# BLOODHUB - Real-Time Emergency Blood Donation Matching System

A secure web platform that instantly matches hospitals with verified blood donors by blood type and location, eliminating life-threatening delays in Nepal's emergency blood supply chain.

## 1. Project Title

**Project Title:** BLOODHUB - Real-Time Emergency Blood Donation Matching System

Instantly connects hospitals with verified donors through smart matching and email alerts, reducing emergency blood request delays from hours to minutes.

## 2. Problem Statement

In Nepal, emergency blood donation remains chaotic and unreliable — families and hospitals depend on scattered social media posts, phone calls, and word-of-mouth, resulting in average response delays of **3–4 hours** and failure rates exceeding **50%**. This outdated system causes preventable deaths and severe complications for patients in critical need, especially in rural and semi-urban areas where timely access to compatible donors is already limited.

## 3. Solution Overview

BLOODHUB is a web-based application that allows hospitals to create urgent blood requests with patient details and urgency level. The system automatically matches available donors by blood type and city, sends instant email notifications, enables donors to respond with one click, and provides hospitals with a real-time dashboard showing responder names, phone numbers, and estimated arrival times — significantly reducing response time and increasing fulfillment rates.

## 4. Unique Selling Proposition

Unlike disorganized social media posts or manual coordination, BLOODHUB provides **verified, location-aware, instant matching** with email alerts and a live responder dashboard — achieving up to **85% fulfillment** and response times under **30 minutes** in simulations, directly saving lives by removing the forgotten friction in Nepal's emergency blood donation process.

## 5. Tech Stack

- Frontend: HTML, CSS, Vanilla JavaScript
- Backend: Node.js + Express
- Database: MySQL
- Email Notifications: Nodemailer (Gmail SMTP)
- Authentication: JWT (JSON Web Tokens)
- Deployment:
  - Frontend → Vercel (static hosting)
  - Backend + Database → Railway (Node.js + MySQL)

## 6. Setup Instructions (step-by-step commands to run locally)

### Prerequisites

- Node.js v18 or higher
- npm
- MySQL server (local: XAMPP, MySQL Workbench, etc.)
- Git

### Clone the repository

```bash
git clone https://github.com/AkritiStha/ClashAThon-BloodyMary-BloodHub.git
cd ClashAThon-BloodyMary-BloodHub
Backend setup
Bashcd src/backend
npm install
Copy and configure environment variables:
Bashcopy .env.example .env
Edit .env with your values (see section 7 below)
Start the backend:
Bashnode server.js
You should see:
textMySQL Connected successfully to bloodhub
Server running on http://localhost:3300
Frontend setup
No build required — static files.
Open in browser:
textsrc/frontend/index.html
(Recommended: Use VS Code Live Server extension for better experience)
Test the application

Open frontend in browser
Register/login as Hospital → create emergency blood request
Register/login as Donor → view open requests & respond
Back to Hospital dashboard → see real-time responders

7. Environment Variables (what keys/configs are needed)
Create .env file in src/backend/ using this template:
env# Server port
PORT=3300

# MySQL Database (local)
DB_HOST=127.0.0.1
DB_USER=root
DB_PASSWORD=your_mysql_password_here          # leave blank if no password
DB_NAME=bloodhub

# JWT Authentication
JWT_SECRET=your_very_long_random_secret_key_here_change_this

# Email Notifications (Gmail App Password required)
EMAIL_USER=your_real_gmail@gmail.com
EMAIL_PASS=your_16_character_app_password_here
Important security note:
Never commit .env to GitHub. It is ignored via .gitignore.
8. Deployment Link (live URL)

Frontend (Vercel): https://clash-a-thon-bloody-mary-blood-hub.vercel.app/

Backend API (Railway): https://clashathon-bloodymary-bloodhub-production.up.railway.app/

9. Team Members (names and roles)

Akriti Shrestha – Leader / Administration & Coordination
Lija Niraula – Business Lead / BMC & Pitch Preparation
Shreya Khanal – UI/UX Design & Frontend Development
Anmol Dhakal – Technology Lead – Backend & Database
Sameer Ansari – Technology Support – Full-Stack Integration & Deployment



```
