# URL Shortener Design Document

## Tech Stack
- Backend: Node.js + Express
- Database: MongoDB (with Mongoose)
- Logging: Custom Middleware (created manually)

## Architecture
- Microservice architecture
- Routes defined for creating, redirecting, and fetching stats

# Afford Medical Tech - Backend Assignment

This repository contains solutions to the backend microservice evaluation provided by Afford Medical Technologies. The project is divided into two separate questions:


## Folder Structure

├── question1/
│   ├── logs/
│   ├── middleware/
│   ├── models/
│   ├── node_modules/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── seed.js
│
├── question2/
│   └── README.MD
│
├── .gitignore
└── README.md


## Data Model

{
  "shortcode": "abcd1",
  "url": "https://example.com/long",
  "createdAt": "2025-07-14T00:00:00Z",
  "expiry": "2025-07-14T00:30:00Z",
  "clicks": 3,
  "clickData": [
    {
      "timestamp": "2025-07-14T00:10:00Z",
      "referrer": "https://google.com",
      "location": "India"
    }
  ]
}
