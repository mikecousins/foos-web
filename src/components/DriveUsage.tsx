import React from 'react';
import styled from '@emotion/styled';

type Props = {
  capacity: number;
  free: number;
  maxCapacity: number;
};

type ContainerProps = {
  size: number;
};

const Container = styled.div`
  display: flex;
  height: 5px;
`;

const UsedContainer = styled('div')<ContainerProps>`
  flex: ${props => props.size};
  background-color: #90CDF4;
`;

const FreeContainer = styled('div')<ContainerProps>`
  flex: ${props => props.size};
  background-color: #9AE6B4;
`;

const SmallerContainer = styled('div')<ContainerProps>`
  flex: ${props => props.size};
  background-color: #EDF2F7;
`;

const DriveUsage = ({ capacity, free, maxCapacity }: Props) => (
  <Container>
    <UsedContainer size={capacity - free} />
    <FreeContainer size={free} />
    <SmallerContainer size={maxCapacity - capacity} />
  </Container>
);

export default DriveUsage;