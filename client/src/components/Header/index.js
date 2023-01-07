import { StyledHeader, StyledTitle, StyledTitleSpan } from "./styled";

const Header = ({title}) => {

  return (
    <StyledHeader>
      <StyledTitle>
        Ход торгов <StyledTitleSpan>{title}</StyledTitleSpan>
      </StyledTitle>
    </StyledHeader>
  );
};

export default Header;
