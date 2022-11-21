import { createContext, useContext, useState } from "react";

const Context = createContext();

// TODO: add Localstate Functionality

export function UserData({ children }) {
  const [session, setsession] = useState("waiting");

  return (
    <Context.Provider value={[session, setsession]}>
      {children}
    </Context.Provider>
  );
}

export function useUserInfo() {
  return useContext(Context);
}
