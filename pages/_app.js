import "../styles/globals.css";
import { UserData } from "../context/userState";
import { DataDesign } from "../Context/dataHolder";
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
          <Component {...pageProps} />
        </UserData>
      </>
    );
  } else {
    return (
      <>
        <UserData>
          <Pannel />
          <Component {...pageProps} />
        </UserData>
      </>
    );
  }
}

export default MyApp;
