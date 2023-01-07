const timerCountdown = (auction, socketIO) => {
  socketIO.on('connection', (socket) => {
    socket.on('requestTime', () => {
      socketIO.emit('updateTime', auction);
    });
  });

  setTimeout(function countdown () {
    if (auction.remainingTime === 0) {
      if (auction.activeParticipant === auction.participants.length - 1) {
        auction.activeParticipant = 0;
      } else {
        auction.activeParticipant += 1;
      }
      
      auction.remainingTime = auction.turnPeriod;

      socketIO.emit('turnUpdate', auction);
    } else {
      auction.remainingTime -= 1;
    }

    setTimeout(countdown, 1000);
  }, 1000);
};

module.exports = { timerCountdown };
