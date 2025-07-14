import mongoose from "mongoose";

const ClickSchema = new mongoose.Schema({
  timestamp: Date,
  referrer: String,
  location: String,
});

const UrlSchema = new mongoose.Schema({
  shortcode: { type: String, unique: true },
  url: String,
  createdAt: { type: Date, default: Date.now },
  expiry: Date,
  clicks: { type: Number, default: 0 },
  clickData: [ClickSchema],
});

const Url = mongoose.model("Url", UrlSchema);

export { Url };
