import React from 'react';
import styled from '@emotion/styled';
import { Drive } from '../types/Drive';

const DriveContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: #eee;
  margin: 10px;
  padding: 10px;
`;

type Props = {
  drive: Drive
}

const DriveBar = ({ drive }: Props) => (
  <DriveContainer>
    {drive.brand} - {drive.model}<br/>
    {drive.free} / {drive.capacity}
  </DriveContainer>
);

export default DriveBar;