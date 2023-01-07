import Table from '../Table';
import { StyledMain, StyledMainText } from "./styled";

const Main = ({auction}) => {

  return (
    <StyledMain>
      <StyledMainText>{auction.note}</StyledMainText>
      <Table auction={auction} />
    </StyledMain>
  );
};

export default Main;
