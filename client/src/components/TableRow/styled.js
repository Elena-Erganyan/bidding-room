import styled from 'styled-components';

export const StyledTableCell = styled.td`
  z-index: 1;
  min-width: 15rem;
  padding: 0.5rem;
  font-size: 1.5rem;
  line-height: 1.2;
  text-align: center;
  background-color: inherit;
  color: ${({color}) => color || '#333333'};
`;
