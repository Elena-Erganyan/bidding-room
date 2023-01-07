const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const cors = require('cors');
const path = require('path');
const { timerCountdown } = require('./timer');

const socketIO = require('socket.io')(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

const { auction } = require('./auction');

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
server.listen(4000, () => {
  console.log('listening on port', 4000);
  timerCountdown(auction, socketIO);
});
  