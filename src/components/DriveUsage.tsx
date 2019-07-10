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
  background-color: blue;
`;

const FreeContainer = styled('div')<ContainerProps>`
  flex: ${props => props.size};
  background-color: green;
`;

const SmallerContainer = styled('div')<ContainerProps>`
  flex: ${props => props.size};
  background-color: #ddd;
`;

const DriveUsage = ({ capacity, free, maxCapacity }: Props) => (
  <Container>
    <UsedContainer size={capacity - free} />
    <FreeContainer size={free} />
    <SmallerContainer size={maxCapacity - capacity} />
  </Container>
);

export default DriveUsage;