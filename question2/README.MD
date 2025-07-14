# URL Shortener Design Document

## Tech Stack
- Backend: Node.js + Express
- Database: MongoDB (with Mongoose)
- Logging: Custom Middleware (created manually)

## Architecture
- Microservice architecture
- Routes defined for creating, redirecting, and fetching stats

## Data Model
```json
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
