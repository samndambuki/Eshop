/** @format */
//context provides a way to pass data to component tree
//without using props
import React, { createContext, useContext, useReducer } from "react";

//create and export the context
//creates the data layer
export const StateContext = createContext();

//wrap our app and provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

//pull info from data layer to use it in various components
export const useStateValue = () => useContext(StateContext);
