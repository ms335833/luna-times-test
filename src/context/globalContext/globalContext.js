import React, { createContext, useReducer } from "react";
import AppReducer from "../reducer/appReducer";
// data file
import JsonData from "../../json/data.json";

// Initial state
const initialState = {
  data: JsonData,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
