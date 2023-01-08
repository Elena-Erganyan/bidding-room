require('dotenv').config(0);

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const path = require('path');

const socketIO = require('socket.io')(server, {
  cors: {
    origin: process.env.URI,
    credentials: true
  }
});

const { auction } = require('./auction');
const { timerCountdown } = require('./timer');

// middleware
app.use(express.static(path.join(__dirname, './client/build')));
app.use(cors());

// routes
app.get('/api/auction', async (req, res) => {
  res.status(200).json(auction);
});

// Return the client
app.get('/*', (_, res) => {
  res.sendFile(path.join(__dirname, './client/build') + '/index.html');
});

// listen for requests
server.listen(process.env.PORT, () => {
  console.log('listening on port', process.env.PORT);
  timerCountdown(auction, socketIO);
});
  