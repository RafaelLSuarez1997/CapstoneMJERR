require('dotenv').config();
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { createServer: createViteServer } = require('vite');

const PORT = process.env.PORT ?? 3000;

const createApp = async () => {
  const app = express();

  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use('/api', require('./api'));
  app.use('/wishlist', require('./api/wishListRoutes'));

  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve(__dirname, '../../dist/')));
  } else {
    const vite = await createViteServer({ server: { middlewareMode: true } });
    app.use(vite.middlewares);
  }

  app.use((err, req, res, next) => {
    console.error(err);
    res.status(err.status ?? 500).send(err.message ?? 'Internal server error.');
  });

  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}.`);
  });
};

createApp();
