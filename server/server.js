
import express from 'express';
import App from './src/APP.js';

import app from './src/APP.js';

const server=express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(App);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

