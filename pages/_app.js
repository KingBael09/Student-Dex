import "../styles/globals.css";
import Navbar from "../components/navbar";
import Pannel from "../components/pannel";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  // console.log(router);
  if (
    router.pathname == "/404" ||
    router.pathname == "/login" ||
    router.pathname == "/signup"
  ) {
    return (
      <>
        <Component {...pageProps} />
      </>
    );
  }
  return (
    <>
      {/* <Navbar /> */}
      <Pannel />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
