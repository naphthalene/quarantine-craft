import React, { useState, useEffect } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Typography } from "@material-ui/core";
import { DataGrid, GridColDef, GridCellParams, GridCellValue, GridSortDirection } from '@material-ui/data-grid';
import * as api from "./api";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      height: "95%",
    },
    vfill: {
      flexGrow: 1,
    }
  })
);

const Economy: React.FC = () => {
  const classes = useStyles();
  const [data, setData] = useState<api.Economy>();

  const fmt_money = (money: number): string => {
    return '$' + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
  }

  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Player',
      flex: 0.6,
      width: 220,
    },
    {
      field: 'balance',
      headerName: 'Balance',
      type: 'string',
      flex: 0.4,
      valueFormatter: (params: GridCellParams): GridCellValue =>
        fmt_money(params.value as number)
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
    <div className={classes.root}>
      <Typography variant="h6">Server Balance {fmt_money(data.balance as number)}</Typography>
      <div className={classes.root}>
        <div className={classes.vfill}>
          <DataGrid
            rows={data.players}
            columns={columns} pageSize={25}
            className={classes.vfill}
            sortModel={[
              {
                field: 'balance',
                sort: 'desc' as GridSortDirection,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Economy;
