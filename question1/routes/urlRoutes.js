import express from 'express';
import Url from '../models/Url.js';
import generateShortcode from '../utils/generateShortcode.js';

const router = express.Router();

// POST /shorturls
router.post('/shorturls', async (req, res) => {
  const { url, validity = 30, shortcode } = req.body;

  if (!url) return res.status(400).json({ message: 'URL is required' });

  let code = shortcode || generateShortcode();

  const existing = await Url.findOne({ shortcode: code });
  if (existing) return res.status(409).json({ message: 'Shortcode already exists' });

  const expiry = new Date(Date.now() + validity * 60000);

  const newUrl = await Url.create({
    originalUrl: url,
    shortcode: code,
    expiry,
  });

  return res.status(201).json({
    shortLink: `http://localhost:5000/${code}`,
    expiry: expiry.toISOString(),
  });
});

// GET /shorturls/:code (stats)
router.get('/shorturls/:code', async (req, res) => {
  const code = req.params.code;
  const urlEntry = await Url.findOne({ shortcode: code });

  if (!urlEntry) return res.status(404).json({ message: 'Shortcode not found' });

  const stats = {
    clicks: urlEntry.clicks,
    originalURL: urlEntry.originalUrl,
    createdAt: urlEntry.createdAt,
    expiry: urlEntry.expiry,
    clickData: urlEntry.clickLogs,
  };

  res.json(stats);
});

// GET /:code (redirect)
router.get('/:code', async (req, res) => {
  const code = req.params.code;
  const entry = await Url.findOne({ shortcode: code });

  if (!entry) return res.status(404).json({ message: 'Shortcode not found' });

  if (new Date() > entry.expiry) return res.status(410).json({ message: 'Link expired' });

  entry.clicks += 1;
  entry.clickLogs.push({
    timestamp: new Date(),
    referrer: req.get('Referrer') || 'direct',
    location: 'India', // you can add GeoIP logic if needed
  });

  await entry.save();
  res.redirect(entry.originalUrl);
});

export default router;
