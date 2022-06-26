import "../styles/globals.css";
import "../styles/definitelyStolen.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";
import Store from "../contexts";
import Script from "next/script";
import { LanguageProvider } from "../contexts/LanguageProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Store>
      <LanguageProvider>
        <Script src="https://documentcloud.adobe.com/view-sdk/main.js" />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </LanguageProvider>
    </Store>
  );
}

export default MyApp;
