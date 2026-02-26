# System Architecture

BLOODHUB follows a classical three-tier client-server architecture: a static HTML/CSS/JS frontend, a Restful Node.js/Express backend, and a MySQL relational database. The frontend and backend are deployed on separate cloud platforms (Netlify and Railway respectively), communicating entirely through authenticated JSON APIs.

## PRESENTATION LAYER

- HTML, CSS, Java Script
- Hosted on Netlify

## HTTPS REST API

## APPLICATION LAYER

- Node.js, Express.js, JWT

- My SQL (connection pool)

## DATA LAYER

- MySQL Tables: donors, hospitals, requests, responses
- Hosted on Railway

## Email Notification Flow

When a hospital POSTs to `/create-request` the backend:

- queries the donors table for all available donors matching blood type and city,
- then dispatches individual personalized emails via Gmail SMTP (Nodemailer).

Each email contains a one-click respond link with the embedded request ID.
