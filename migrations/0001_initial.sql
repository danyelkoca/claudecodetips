-- Purchases (main access control)
CREATE TABLE IF NOT EXISTS purchases (
  id TEXT PRIMARY KEY,
  email TEXT NOT NULL,
  stripe_session_id TEXT UNIQUE NOT NULL,
  stripe_customer_id TEXT,
  stripe_payment_intent TEXT,
  status TEXT NOT NULL DEFAULT 'paid',
  paid_at TEXT NOT NULL,
  refunded_at TEXT,
  disputed_at TEXT,
  lang TEXT
);
CREATE INDEX IF NOT EXISTS idx_purchases_email_status ON purchases(email, status);
CREATE INDEX IF NOT EXISTS idx_purchases_payment_intent ON purchases(stripe_payment_intent);

-- Contacts (contact form submissions)
CREATE TABLE IF NOT EXISTS contacts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  lang TEXT,
  ip TEXT,
  created_at TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new'
);

-- Rate limits (request throttling)
CREATE TABLE IF NOT EXISTS rate_limits (
  id TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 1,
  window_start TEXT NOT NULL
);

-- Webhook deduplication
CREATE TABLE IF NOT EXISTS processed_webhook_events (
  id TEXT PRIMARY KEY,
  event_type TEXT NOT NULL,
  processed_at TEXT NOT NULL
);
