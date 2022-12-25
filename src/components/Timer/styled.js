import styled from 'styled-components';

export const StyledTimer = styled.div`
  position: relative;
  width: 100%;
  padding: 1rem 2.5rem 1rem 1rem;
  border: 1px solid #edd4d7;
  border-radius: 0.3rem;
  background-color: #f2dede;
  text-align: center;

  div {
    color: #cd1719;
  }
`;

export const StyledHourglass = styled.img`
  position: absolute;
  width: 1.6rem;
  right: 1rem;
  top: 1rem;
`;
