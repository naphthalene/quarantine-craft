import React from "react";

export interface DefaultContextType {
  test: boolean;
}

const DefaultContext = React.createContext<DefaultContextType>(
  {} as DefaultContextType // Safe because this value never gets used
);

export default DefaultContext;
