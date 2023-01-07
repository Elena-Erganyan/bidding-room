import styled from 'styled-components';

export const StyledTable = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  
  tr {
    background-color: white;
  }
  
  th {
    font-weight: normal;
    text-align: left;
  }
`;

export const StyledTableHead = styled.thead`
  border-bottom: 2px solid #d3d3d3;
  text-transform: uppercase;
  
  th {
    text-align: center;
  }
`;

export const StyledTableBody = styled.tbody`
  tr:nth-child(odd) {
    background-color: #f4f4f4;
  }
`;

export const StyledTableWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  overflow-x: auto;
`;
