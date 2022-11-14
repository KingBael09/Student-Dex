import { createContext, useContext, useEffect, useState } from "react";

const Context = createContext();

export function UserData({ children }) {
  let getItem = {};
  const [session, setsession] = useState("waiting");

  // useEffect(() => {
  //   const user = sessionStorage.getItem("user");
  //   const pass = sessionStorage.getItem("pass");
  //   if (session === "waiting") {
  //     if (user != undefined) {
  //       setsession({ id: user, Pass: pass });
  //       // This Has Some Problem In it causing some internal fetching problems
  //     }
  //   }
  //   if (session != "waiting") {
  //     sessionStorage.setItem("user", session.id);
  //     sessionStorage.setItem("pass", session.Pass);
  //   }
  // }, [session]);

  return (
    <Context.Provider value={[session, setsession]}>
      {children}
    </Context.Provider>
  );
}

export function useUserInfo() {
  return useContext(Context);
}
