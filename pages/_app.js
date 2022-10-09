import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import { Router, useRouter } from "next/router";
import { getSession, SessionProvider } from "next-auth/react";
import { UserProvider } from '@auth0/nextjs-auth0';

const progress = new ProgressBar({
  size: 3,
  color: "#720b8f",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


function MyApp({
  Component,
  pageProps,
  session
}) {
  return (
    // <UserProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    // </UserProvider>
  )
}

export default MyApp
