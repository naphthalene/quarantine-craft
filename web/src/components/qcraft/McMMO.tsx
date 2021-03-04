import * as api from "./api";
import CircularProgress from "@material-ui/core/CircularProgress";
import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

const McMMO: React.FC = () => {
  const [data, setData] = useState<api.McMMO>();

  const request = async (): void => {
    const response = await fetch("/api/v1/mcmmo");
    const responseData = await response.json();
    setData(responseData as api.McMMO);
  };

  useEffect(() => {
    request();
  }, []);

  if (!data) {
    return <CircularProgress />;
  }
  return (
    <div>
      <Typography variant="h3">MMO Stats!</Typography>
      <Typography>{data.players}</Typography>
    </div>
  );
};

export default McMMO;
