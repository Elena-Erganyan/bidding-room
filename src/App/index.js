import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Main from '../components/Main';
import { StyledWrapper } from './styled';

function App() {
  const { nameOfAuction, note } = useSelector((state) => state.auction);

  return (
    <StyledWrapper>
      <Header title={nameOfAuction} />
      <Main text={note} />
    </StyledWrapper>
  );
}

export default App;
