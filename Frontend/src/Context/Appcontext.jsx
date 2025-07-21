// src/Context/AppContext.js
import React, { createContext, useState } from "react";

export const DonationContext = createContext();

const AppContextProvider = ({ children }) => {
  const [causes, setCauses] = useState([]);

  const addCause = (cause) => {
    setCauses((prev) => [...prev, cause]);
  };

  return (
    <DonationContext.Provider value={{ causes, addCause }}>
      {children}
    </DonationContext.Provider>
  );
};

export default AppContextProvider;
