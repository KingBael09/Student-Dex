import { createContext, useContext, useState } from "react";
// import { useUserInfo } from "./userState";
const Context = createContext();

export function DataDesign({ children }) {
  // const [session, setsession] = useUserInfo();
  // console.log("From dataHolder");
  // console.log(session);
  // console.log("From dataHolder");
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
