import Head from "next/head";
import React, { useContext } from "react";
import Navbar from "./navbar";
import DarkModeContext from "../context/dark-mode-context";

export default function Layout({ children }) {
  let { darkMode } = useContext(DarkModeContext);

  return (
    <div>
      <Head>
        <title>Abu&apos;s Portfolio</title>
        <meta name="description" content="Abu's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={`${darkMode ? "dark" : ""}`}>
        <Navbar />
        <div className=" dark:bg-gray-900 ">{children}</div>
      </div>
    </div>
  );
}
