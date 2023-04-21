import Head from "next/head";
import Footer from "./Footer/Footer";
// import { Navbar } from "./Navbar/Navbar";
import Navbar from "./Navbar/Navbar";
import { useTheme } from "next-themes";
import React, { createContext, useEffect } from "react";

export interface Layout {
  children: React.ReactNode;
}



export const ThemeContext = createContext(null);
export default function Layout({ children }: Layout) {


  const { resolvedTheme, setTheme } = useTheme();
  const [themeContext, setThemeContext] = React.useState<any>();

  useEffect(() => {
    if (resolvedTheme) {
      setThemeContext(resolvedTheme);
    }
  }, [resolvedTheme]);

  useEffect(() => {
    if (themeContext) {
      setTheme(themeContext);
    }
  }, [themeContext]);
  return (
    <ThemeContext.Provider value={[resolvedTheme, setTheme]}>
          <div className='FlexCenter justify-center max-xs:justify-start'>
            <div className='max-sm:px-[0rem] justify-center'>
              {/* <Navbar /> */}
              <Head>
                <title>HotelBooking</title>
                <meta
                  name='HotelBooking'
                  content='HotelBooking'
                />
                <link
                  rel='icon'
                  href="/static/favicon.ico"
                />
              </Head>
              <main>{children}</main>
              {/* <Footer /> */}
            </div>
          </div>
    </ThemeContext.Provider>
  );
}
