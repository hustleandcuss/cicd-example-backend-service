const whitelist = process.env.CORS_ORIGINS

const cors = {
  origin: whitelist,
  maxAge: 86400,
  headers: [
    'Accept',
    'Authorization',
    'Content-Type',
    'If-None-Match'
  ],
  exposedHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  credentials: true
}

module.exports = cors
