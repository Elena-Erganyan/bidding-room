const timerCountdown = (auction, socketIO) => {
  socketIO.on('connection', (socket) => {
    socket.on('requestTime', () => {
      socketIO.emit('syncTime', auction);
    });
  });

  let nextTimeStamp = Date.now() + 1000;

  setTimeout(function countdown () {
    const drift = Date.now() - nextTimeStamp;

    if (auction.remainingTime === 0) {
      if (auction.activeParticipant === auction.participants.length - 1) {
        auction.activeParticipant = 0;
      } else {
        auction.activeParticipant += 1;
      }
      
      auction.remainingTime = auction.turnPeriod;

      socketIO.emit('syncTime', auction);
    } else {
      auction.remainingTime -= 1;
    }

    // the timestamp we should call the timer next
    nextTimeStamp += 1000; 
  
    // take into account the drift
    setTimeout(countdown, Math.max(0, 1000 - drift));
  }, 1000);
};

module.exports = { timerCountdown };
