import "../styles/globals.css";
import { DarkModeProvider } from "../context/dark-mode-context";

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeProvider>
      <Component {...pageProps} />
    </DarkModeProvider>
  );
}

export default MyApp;
