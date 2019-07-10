import React from 'react';

type Props = {
  value: number;
};

const Size = ({ value }: Props) => {
  const kilobytes = 1024;
  const megabytes = 1024 * 1024;
  const gigabytes = 1024 * 1024 * 1024;
  const terabytes = 1024 * 1024 * 1024 * 1024;
  
  if (value > terabytes) {
    return <span>{(value / terabytes).toFixed(1)}TB</span>;
  }

  if (value > gigabytes) {
    return <span>{(value / gigabytes).toFixed(1)}GB</span>;
  }

  if (value > megabytes) {
    return <span>{(value / megabytes).toFixed(1)}MB</span>;
  }

  if (value > kilobytes) {
    return <span>{(value / kilobytes).toFixed(1)}kB</span>;
  }

  return <span>{value}B</span>;
};

export default Size;