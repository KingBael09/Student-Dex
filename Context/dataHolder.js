import { createContext, useContext, useState } from "react";

const Context = createContext();

export function SessionData({ children }) {
  const [userData, setuserData] = useState("none");

  return (
    <Context.Provider value={[userData, setuserData]}>
      {children}
    </Context.Provider>
  );
}

export function useUserData() {
  return useContext(Context);
}
