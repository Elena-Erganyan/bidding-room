import Table from '../Table';
import { StyledMain, StyledMainText } from "./styled";

const Main = ({text}) => {

  return (
    <StyledMain>
      <StyledMainText>{text}</StyledMainText>
      <Table />
    </StyledMain>
  );
};

export default Main;
