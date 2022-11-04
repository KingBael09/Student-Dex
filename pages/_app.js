import "../styles/globals.css";
import Pannel from "../components/pannel";
import { useRouter } from "next/router";
import { UserData } from "../context/userState";

function MyApp({ Component, pageProps }) {
  // const router = useRouter();
  // if (
  //   router.pathname == "/404" ||
  //   router.pathname == "/login" ||
  //   router.pathname == "/signup"
  // ) {
  //   return (
  //     <>
  //       <UserData>
  //         <Component {...pageProps} />
  //       </UserData>
  //     </>
  //   );
  // }
  // return (
  //   <>
  //     <UserData>
  //       {/* <Pannel /> */}
  //       <Component {...pageProps} />
  //     </UserData>
  //   </>
  // );

  return (
    <>
      <UserData>
        <Component {...pageProps} />
      </UserData>
    </>
  );
}

export default MyApp;
