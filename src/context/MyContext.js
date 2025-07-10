import { createContext, useContext } from "react";

const Mycontext = createContext();

const useMyContext = () => {
  return useContext(Mycontext); // Whatever we write here in the return open and closed bracket in between that will be passed as same like props into the MyContextProvider as children
};

export { Mycontext, useMyContext };
