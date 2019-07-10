import React from 'react';
import styled from '@emotion/styled';
import { Drive } from '../types/Drive';
import Size from './Size';
import DriveUsage from './DriveUsage';

const DriveContainer = styled.div`
  width: 100%;
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
`;

const DriveNumber = styled.div`
  width: 50px;
  font-size: 36px;
  font-weight: bold;
`;

const DriveDetails = styled.div`
  flex: 1;
`;

type Props = {
  drive: Drive
}

const DriveBar = ({ drive }: Props) => (
  <DriveContainer>
    <DriveNumber>
      {drive.number}
    </DriveNumber>
    <DriveDetails>
      <DriveUsage free={drive.free} capacity={drive.capacity} maxCapacity={8000000000000} />
      {drive.brand} - {drive.model}<br />
      <Size value={drive.free} /> / <Size value={drive.capacity} /><br />
      {drive.temperature}&deg;C
    </DriveDetails>
  </DriveContainer>
);

export default DriveBar;