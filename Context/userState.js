import { createContext, useContext, useState } from "react";

const Context = createContext();

export function UserData({ children }) {
  // if (typeof window != "undefined") {
  //   var sessionId = sessionStorage.getItem("id");
  // }
  // const [session, setsession] = useState(undefined);
  // if (sessionId === undefined) {
  //   setsession("waiting");
  // } else {
  //   setsession(sessionId);
  // }
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

if (typeof window != "undefined") {
  // sessionStorage.setItem("id", "Lmao");
}
