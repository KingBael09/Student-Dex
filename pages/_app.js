import "../styles/globals.css";
import { UserData } from "../context/userState";
import { SessionData } from "../Context/dataHolder";
import { useRouter } from "next/router";
import Pannel from "../components/pannel";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  if (
    router.pathname == "/404" ||
    router.pathname == "/login" ||
    router.pathname == "/signup" ||
    router.pathname == "/"
  ) {
    return (
      <>
        <UserData>
          <SessionData>
            <Component {...pageProps} />
          </SessionData>
        </UserData>
      </>
    );
  } else {
    return (
      <>
        <UserData>
          <SessionData>
            <Pannel />
            <Component {...pageProps} />
          </SessionData>
        </UserData>
      </>
    );
  }
}

export default MyApp;
