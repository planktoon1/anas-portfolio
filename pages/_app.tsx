import "../styles/globals.css";
import "../styles/definitelyStolen.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/layout/Layout";
import Store from "../contexts";
import Script from "next/script";
import { LanguageProvider } from "../contexts/LanguageProvider";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TABNAMES from "../contexts/tabNames";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const filename = router.query.n as string;
  const defaultTitle = "Ana's Portfolio";
  const [pageTitle, setPageTitle] = useState(defaultTitle);

  useEffect(() => {
    if (router.asPath === "/") {
      setPageTitle(defaultTitle);
      return;
    }

    if (filename) {
      const withSpaces = filename.split("/")[1].replaceAll("-", " ");
      const capitalized =
        withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
      setPageTitle(capitalized);
      return;
    }

    if (TABNAMES[router.asPath]) {
      setPageTitle(TABNAMES[router.asPath]);
    }
  }, [router.asPath]);

  return (
    <Store>
      <Head>
        <title>{pageTitle}</title>
      </Head>
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
