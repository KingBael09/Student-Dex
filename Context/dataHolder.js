import { createContext, useContext, useState } from "react";

const Context = createContext();

export function DataDesign({ children }) {
  const [data, setData] = useState();
  //   console.log("From UseContext");
  //   console.log(data);

  return (
    <Context.Provider value={[data, setData]}>{children}</Context.Provider>
  );
}

export function useUserData() {
  return useContext(Context);
}
