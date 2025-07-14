// seed.js
import mongoose from "mongoose";
import { Url } from "./models/Url.js";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/myTestDB";

const seedData = [
  {
    shortcode: "book23",
    url: "https://medium.com/fullstack-javascript-tutorial",
    createdAt: new Date("2025-07-13T09:00:00Z"),
    expiry: new Date("2025-07-13T09:30:00Z"),
    clicks: 4,
    clickData: [
      {
        timestamp: new Date("2025-07-13T09:02:15Z"),
        referrer: "https://www.linkedin.com",
        location: "India",
      },
      {
        timestamp: new Date("2025-07-13T09:05:42Z"),
        referrer: "https://developer.mozilla.org",
        location: "Germany",
      },
      {
        timestamp: new Date("2025-07-13T09:10:00Z"),
        referrer: "https://github.com",
        location: "USA",
      },
      {
        timestamp: new Date("2025-07-13T09:18:25Z"),
        referrer: "https://stackoverflow.com",
        location: "Canada",
      },
    ],
  },
  {
    shortcode: "techie9",
    url: "https://techcrunch.com/latest-ai-news",
    createdAt: new Date("2025-07-13T08:30:00Z"),
    expiry: new Date("2025-07-13T09:30:00Z"),
    clicks: 2,
    clickData: [
      {
        timestamp: new Date("2025-07-13T08:45:33Z"),
        referrer: "https://news.ycombinator.com",
        location: "Singapore",
      },
      {
        timestamp: new Date("2025-07-13T08:55:17Z"),
        referrer: "https://twitter.com",
        location: "United Kingdom",
      },
    ],
  },
];

async function seed() {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("MongoDB connected.");

    await Url.deleteMany();
    console.log("Existing data cleared.");

    await Url.insertMany(seedData);
    console.log("seed data inserted.");

    await mongoose.disconnect();
    console.log("🔌 MongoDB disconnected.");
  } catch (error) {
    console.error("Seeding failed:", error);
  }
}

seed();
