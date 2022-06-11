import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";
import Store from "../contexts";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  );
}

export default MyApp;
