import Table from '../Table';
import { StyledMain, StyledMainText } from "./styled";

const Main = ({auction, socket}) => {

  return (
    <StyledMain>
      <StyledMainText>{auction.note}</StyledMainText>
      <Table auction={auction} socket={socket} />
    </StyledMain>
  );
};

export default Main;
