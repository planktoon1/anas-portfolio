import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";
import Store from "../contexts";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <Script src="https://documentcloud.adobe.com/view-sdk/main.js" />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Store>
  );
}

export default MyApp;
