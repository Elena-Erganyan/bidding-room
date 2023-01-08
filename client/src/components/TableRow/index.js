import { v4 as uuidv4 } from 'uuid';
import { StyledTableCell } from './styled';

const TableRow = ({data, firstColumnRef, rowConfigs}) => {

  const {header, rowHeaderColor, rowCellsColor} = rowConfigs;

  return (
    <tr>
      <StyledTableCell
        as="th"
        color={rowHeaderColor}
        style={{position: 'sticky', left: 0}}
        {...firstColumnRef ? {ref: firstColumnRef} : {}}
      >
        {header}
      </StyledTableCell>
      {data.map((value) => { // data is the participants inputs for this table row
        return (
          <StyledTableCell key={uuidv4()} color={rowCellsColor}>
            {Array.isArray(value)
              ? value.map((item, i) => <div key={uuidv4()} style={{color: rowCellsColor[i]}}>{item}</div>)
              : value
            }
          </StyledTableCell>
        );
      })}
    </tr>
  );
};

export default TableRow;
