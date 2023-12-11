// app.js

const express = require('express');
const morgan = require('morgan');
const { createServer: createViteServer } = require('vite');
const path = require('path');

const createApp = async () => {
  const app = express();

  // Logging middleware
  app.use(morgan('dev'));

  // Body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Serve static HTML in production & Vite dev server in development
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../../dist/')));
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
    });

    app.use(vite.middlewares);
  }

  // Include wishlist routes
  app.use('/wishlist', require('./wishlistRoutes'));

  // ... other routes ...

  // Simple error handling middleware
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status ?? 500).send(err.message ?? 'Internal server error.');
  });

  return app;
};

module.exports = createApp;
