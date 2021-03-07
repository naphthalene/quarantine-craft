import React, { useState, useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";
import { DataGrid, GridColDef, ValueGetterParams } from '@material-ui/data-grid';
import * as api from "./api";

const Economy: React.FC = () => {
  const [data, setData] = useState<api.Economy>();

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'Player', width: 150 },
    {
      field: 'balance',
      headerName: 'Balance',
      type: 'string',
      width: 350,
    },
  ];

  const request = async () => {
    const response = await fetch("/api/v1/economy");
    const responseData = await response.json();
    setData(responseData as api.Economy);
  };

  useEffect(() => {
    request();
  }, []);

  if (!data) {
    return <CircularProgress />;
  }
  return (
    <div>
      <Typography variant="h6">Server Balance {data.balance}</Typography>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={data.players}
          columns={columns} pageSize={25} />
      </div>
    </div>
  );
};

export default Economy;
