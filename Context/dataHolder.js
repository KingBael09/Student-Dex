import { createContext, useContext, useState } from "react";
// import { useUserInfo } from "./userState";
const Context = createContext();

export function DataDesign({ children }) {
  const [data, setData] = useState();

  return (
    <Context.Provider value={[data, setData]}>{children}</Context.Provider>
  );
}

export function useUserData() {
  return useContext(Context);
}
