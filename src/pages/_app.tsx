import type { AppProps } from "next/app";
import React, { useEffect } from "react";
import AOS from "aos";
import "@/styles/globals.css";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return <Component {...pageProps} />;
}
