import "../styles/globals.css";
import Head from "next/head";
import Nav from "./nav";
import { createContext, useState } from "react";

export const UserContext = createContext(null);
function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(false);

  return (
    <>
      <Head>
        <title>Demo Project</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <UserContext.Provider value={{ auth, setAuth }}>
        <Nav />
        <Component {...pageProps} />
      </UserContext.Provider>
    </>
  );
}

export default MyApp;
