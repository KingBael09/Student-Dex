import { createContext, useContext, useState } from "react";

const Context = createContext();

export function UserData({ children }) {
  const [session, setsession] = useState("waiting");

  // useEffect(() => {
  //   if (session != "waiting") {
  //     // console.log("Lmao");
  //     if (typeof window != "undefined") {
  //       sessionStorage.setItem("user", session.id);
  //       sessionStorage.setItem("pass", session.Pass);
  //     }
  //     if (session === undefined) {
  //       if (sessionStorage.getItem("user" != undefined)) {
  //         let arr = new Array();
  //         arr[0] = sessionStorage.getItem("user");
  //         arr[1] = sessionStorage.getItem("pass");
  //         // console.log(arr);
  //         setsession(arr);
  //       }
  //       setsession("waiting");
  //     }
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
