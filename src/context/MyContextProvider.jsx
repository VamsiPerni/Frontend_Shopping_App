import { useState } from "react";
import { Mycontext } from "./MyContext";

const MyContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState({});
  // here we will put the useState values which are rarely changed in the code , if the

  const valueObj = { count, setCount, user, setUser };

  return <Mycontext.Provider value={valueObj}>{children}</Mycontext.Provider>;
};

export { MyContextProvider };
