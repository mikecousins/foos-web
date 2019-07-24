import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckDouble, faDatabase, faList } from '@fortawesome/free-solid-svg-icons';
import { Drive } from '../types/Drive';
import Size from './Size';
import DriveUsage from './DriveUsage';

const DriveContainer = styled.div`
  width: 100%;
  background-color: #F7FAFC;
  margin-bottom: 10px;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const DriveBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

const DriveNumberContainer = styled.div`
  width: 50px;
  text-align: center;
  padding: 10px;
`;

const DriveNumber = styled.span`
  font-size: 36px;
  font-weight: bold;
`;

const DriveDetails = styled.div`
  flex: 1;
  padding: 10px;
`;

type Props = {
  drive: Drive
}

const DriveBar = ({ drive }: Props) => (
  <DriveContainer>
    <DriveUsage free={drive.free} capacity={drive.capacity} maxCapacity={8000000000000} />
    <DriveBody>
      <DriveNumberContainer>
        <DriveNumber>
          {drive.number}
        </DriveNumber>
      </DriveNumberContainer>
      <DriveDetails>
        {drive.brand} - {drive.model}
        {drive.data && <React.Fragment>&nbsp;<FontAwesomeIcon icon={faDatabase} title="Data" /></React.Fragment>}
        {drive.content && <React.Fragment>&nbsp;<FontAwesomeIcon icon={faList} title="Content" /></React.Fragment>}
        {drive.parity && <React.Fragment>&nbsp;<FontAwesomeIcon icon={faCheckDouble} title="Parity" /></React.Fragment>}
        <br />
        <Size value={drive.free} /> / <Size value={drive.capacity} /><br />
        {drive.temperature}&deg;C
      </DriveDetails>
    </DriveBody>

  </DriveContainer>
);

export default DriveBar;