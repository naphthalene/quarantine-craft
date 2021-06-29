/* import React, { useState, useEffect } from "react";
 * import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
 * import Accordion from "@material-ui/core/Accordion";
 * import AccordionSummary from "@material-ui/core/AccordionSummary";
 * import AccordionDetails from "@material-ui/core/AccordionDetails";
 * import CircularProgress from "@material-ui/core/CircularProgress";
 * import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
 * import { Typography } from "@material-ui/core";
 * import { DataGrid, GridColDef, GridCellParams, GridCellValue, GridSortDirection } from '@material-ui/data-grid';
 * import * as api from "./api";
 * 
 * const useStyles = makeStyles((theme: Theme) =>
 *   createStyles({
 *     root: {
 *       display: "flex",
 *       flexDirection: "column",
 *       width: "100%",
 *       height: "95%",
 *     },
 *     grids: {
 *       flexGrow: 1,
 *       minHeight: "450px",
 *     },
 *     heading: {
 *       fontSize: theme.typography.pxToRem(18),
 *       fontWeight: theme.typography.fontWeightBold,
 *     },
 *   })
 * );
 * 
 * const Economy: React.FC = () => {
 *   const classes = useStyles();
 *   const [data, setData] = useState<api.Economy>();
 * 
 *   const fmt_money = (money: number): string => {
 *     return '$' + money.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
 *   }
 * 
 *   const player_columns: GridColDef[] = [
 *     {
 *       field: 'id',
 *       headerName: 'Player',
 *       flex: 0.6,
 *     },
 *     {
 *       field: 'balance',
 *       headerName: 'Balance',
 *       type: 'string',
 *       flex: 0.4,
 *       valueFormatter: (params: GridCellParams): GridCellValue =>
 *         fmt_money(params.value as number)
 *     },
 *   ];
 * 
 *   const item_columns: GridColDef[] = [
 *     {
 *       field: 'id',
 *       headerName: 'Item',
 *       flex: 0.6,
 *     },
 *     {
 *       field: 'worth',
 *       headerName: 'Worth',
 *       type: 'string',
 *       flex: 0.4,
 *       valueFormatter: (params: GridCellParams): GridCellValue =>
 *         fmt_money(params.value as number)
 *     },
 *   ];
 * 
 *   const request = async () => {
 *     const response = await fetch("/api/v1/economy");
 *     const responseData = await response.json();
 *     setData(responseData as api.Economy);
 *   };
 * 
 *   useEffect(() => {
 *     request();
 *   }, []);
 * 
 *   if (!data) {
 *     return <CircularProgress />;
 *   }
 *   return (
 *     <div className={classes.root}>
 *       <Typography variant="h6">Server Balance {fmt_money(data.balance as number)}</Typography>
 *       <div className={classes.grids}>
 *         <Accordion key="items">
 *           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
 *             <Typography className={classes.heading}>Items</Typography>
 *           </AccordionSummary>
 *           <AccordionDetails className={classes.grids}>
 *             <DataGrid
 *               rows={data.items}
 *               columns={item_columns}
 *               className={classes.grids}
 *               sortModel={[
 *                 {
 *                   field: 'worth',
 *                   sort: 'desc' as GridSortDirection,
 *                 },
 *               ]}
 *             />
 *           </AccordionDetails>
 *         </Accordion>
 *         <Accordion key="players">
 *           <AccordionSummary expandIcon={<ExpandMoreIcon />}>
 *             <Typography className={classes.heading}>Players</Typography>
 *           </AccordionSummary>
 *           <AccordionDetails className={classes.grids}>
 *             <DataGrid
 *               rows={data.players}
 *               columns={player_columns} pageSize={5}
 *               className={classes.grids}
 *               sortModel={[
 *                 {
 *                   field: 'balance',
 *                   sort: 'desc' as GridSortDirection,
 *                 },
 *               ]}
 *             />
 *           </AccordionDetails>
 *         </Accordion>
 *       </div>
 *     </div>
 *   );
 * };
 * 
 * export default Economy; */
