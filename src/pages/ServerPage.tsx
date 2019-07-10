import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DriveBar from '../components/DriveBar';
import { Server } from '../types/Server';
import Size from '../components/Size';

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
    totalCapacity += drive.capacity;
    totalFree += drive.free;
  })
  const drives = server.drives.map((drive: any, index: number) => <DriveBar drive={drive} key={index} />);
  return (
    <React.Fragment>
      <h1><Size value={totalFree} /> / <Size value={totalCapacity} /></h1>
      {drives}
    </React.Fragment>
  );
}

export default ServerPage;