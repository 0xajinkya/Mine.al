import '../styles/globals.css'
import ProgressBar from "@badrap/bar-of-progress";
import { Router, useRouter } from "next/router";
import { getSession, SessionProvider } from "next-auth/react";

const progress = new ProgressBar({
  size: 3,
  color: "#1E40AF",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


function MyApp({ 
  Component, 
  pageProps : {session, ...pageProps}
}) 
{
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
