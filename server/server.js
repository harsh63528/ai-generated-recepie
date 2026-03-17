
import express from 'express';
import app from './src/APP.js';

const server=express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

