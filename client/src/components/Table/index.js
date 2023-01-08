import { useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TableRow from '../TableRow';
import Timer from '../Timer';
import { StyledTableWrapper, StyledTable, StyledTableHead, StyledTableBody } from './styled';

const Table = ({auction, socket}) => {
  const {
    activeParticipant,
    remainingTime,
    turnPeriod,
    participants,
    tableHeadProperties,
    properties,
  } = auction;

  const tableWrapperRef = useRef(null);
  const timerRef = useRef(null);
  const firstColumnRef = useRef(null);

  useEffect(() => {
    // scrolling to the active participant in mobile/tablet view
    // timerRef.current.offsetParent.nodeName === 'TABLE' because it has 'postition: relative'
    tableWrapperRef.current.scrollLeft = timerRef.current.offsetLeft - firstColumnRef.current.clientWidth;
  }, [activeParticipant]);

  return (
    <StyledTableWrapper ref={tableWrapperRef}>
      <StyledTable>
        <StyledTableHead>
          {Object.keys(tableHeadProperties).map((property, idx) => (
            <TableRow
              data={participants.map((participant, i) => {
                if (property === 'turn') {
                  return i === activeParticipant &&
                    <Timer
                      remainingTime={remainingTime}
                      socket={socket}
                      timerRef={timerRef}
                      turnPeriod={turnPeriod}
                    />
                } else if (property === 'params') {
                  return [`Участник №${i + 1}`, participant.name];
                }
                return participant[property];
              })}
              firstColumnRef={idx === 0 && firstColumnRef}
              key={uuidv4()}
              rowConfigs={tableHeadProperties[property]}
            />
          ))}
        </StyledTableHead>
        <StyledTableBody>
          {Object.keys(properties).map((property) => (
            <TableRow
              data={participants.map((participant) => participant[property])}
              key={uuidv4()}
              rowConfigs={properties[property]}
            />
          ))}
        </StyledTableBody>
      </StyledTable>
    </StyledTableWrapper>
  );
};

export default Table;
