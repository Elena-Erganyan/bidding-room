import { useEffect, useState } from 'react';
import socketIO from 'socket.io-client';
import Header from '../components/Header';
import Main from '../components/Main';
import { StyledWrapper } from './styled';

const socket = socketIO.connect('http://localhost:4000');

function App() {
  const [auction, setAuction] = useState(null);

  useEffect(() => {
    const fetchAuction = async () => {
      const response = await fetch('/api/auction');
      const auctionObj = await response.json();

      if (response.ok) {
        setAuction(auctionObj);
      }
    };
    
    fetchAuction();
    
  }, []);

  useEffect(() => {
    socket.on('turnUpdate', (data) => {
      setAuction(data);
    });
  }, []);

  useEffect(() => {
    socket.on('syncTime', (data) => {
      setAuction(data);
      console.log(data);
    });
  }, []);  

  return auction && (
    <StyledWrapper>
      <Header title={auction?.nameOfAuction} />
      <Main auction={auction} socket={socket} />
    </StyledWrapper>
  );
}

export default App;
