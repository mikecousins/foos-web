import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DriveBar from '../components/DriveBar';
import { Server } from '../types/Server';
import Size from '../components/Size';
import styled from '@emotion/styled';

const Content = styled.div`
  max-width: 800px;
  margin: auto;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
`;

const ServerPage = () => {
  const [server, setServer] = useState<Server | null>(null);
  
  useEffect(() => {
    axios.get<Server>('https://foos.azurewebsites.net/api/GetServer').then((res) => {
      setServer(res.data);
    });
  }, []);

  if (!server) {
    return <div>Loading...</div>;
    // return <FontAwesomeIcon icon={faSpinner} spin />;
  }

  let totalCapacity = 0;
  let totalFree = 0;
  server.drives.forEach(drive => {
    if (drive.data) {
      totalCapacity += drive.capacity;
      totalFree += drive.free;
    }
  })
  const drives = server.drives.map((drive: any, index: number) => <DriveBar drive={drive} key={index} />);
  return (
    <Content>
      <h1>{server.name} - <Size value={totalFree} /> / <Size value={totalCapacity} /></h1>
      {drives}
    </Content>
  );
}

export default ServerPage;