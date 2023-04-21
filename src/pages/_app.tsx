import { ThemeProvider } from "next-themes";
import "../../styles/globals.scss";
import Head from "next/head";

export default function App({ Component, pageProps, }: any) {
  return (
    <ThemeProvider disableTransitionOnChange attribute="class">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"></link>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

