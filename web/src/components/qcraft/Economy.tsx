import * as api from "./api";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

const Economy: React.FC = () => {
  const [data, setData] = useState<api.Economy>();

  const request = async (): void => {
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
      <Typography variant="h3">Server Balance ${data.balance}</Typography>
    </div>
  );
};

export default Economy;
