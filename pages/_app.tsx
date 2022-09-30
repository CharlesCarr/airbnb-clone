import "../styles/globals.css";
import type { AppProps } from "next/app";
import { FirebaseProvider } from "../context/FirebaseContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FirebaseProvider>
      <Component {...pageProps} />
    </FirebaseProvider>
  );
}

export default MyApp;
