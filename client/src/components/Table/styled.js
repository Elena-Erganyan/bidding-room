import styled from 'styled-components';

export const StyledTable = styled.table`
  position: relative;
  width: 100%;
  border-collapse: collapse;
  
  th {
    font-weight: normal;
  }

  tr {
    background-color: white;
  }
`;

export const StyledTableHead = styled.thead`
  border-bottom: 2px solid #d3d3d3;
  text-transform: uppercase;
`;

export const StyledTableBody = styled.tbody`
  th {
    text-align: left;
  }

  tr:nth-child(odd) {
    background-color: #f4f4f4;
  }
`;

export const StyledTableWrapper = styled.div`
  width: 100%;
  padding: 1rem 0;
  overflow-x: auto;
`;
