import Head from "next/head";
import Image from "next/image";
import { useTheme } from "next-themes";
import PulseDashDark from "../../public/landingpage/pulsedashdarkmode.svg";
import PulseDashLight from "../../public/landingpage/pulse_genisis_dash.svg";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";
import FifthSection from "../components/FifthSection";
import Roadmap from "../components/Roadmap";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { ThemeContext } from "../components/Layout";
import First from "../components/First";

export default function Home(props: any) {
  const [resolvedTheme, setTheme] = useContext(ThemeContext);
  const dropShadow = {
    filter:
      "drop-shadow(0px 128px 51px rgba(0, 0, 0, 0.01)) drop-shadow(0px 72px 43px rgba(0, 0, 0, 0.05)) drop-shadow(0px 32px 32px rgba(0, 0, 0, 0.09)) drop-shadow(0px 8px 18px rgba(0, 0, 0, 0.1)) drop-shadow(0px 0px 0px rgba(0, 0, 0, 0.1))",
  };

  return (
    <div className="">
      <Head>
        <title>HotelBooking</title>
        <meta name="HotelBooking" content="HotelBooking" />
        {/* <link rel="shortcut icon" href="/static/favicon.ico" /> */}
      </Head>
      <div
        className="FlexCenter overflow-hidden
      max-sm:flex max-sm:justify-start  max-sm:max-w-[100vw] max-sm:overflow-hidden max-sm:pr-[1px] max-sm:pl-[1px] "
        style={{
          backgroundColor: resolvedTheme === "dark" ? "#1E1E1E" : "#FFFFFF",
        }}
      >
        <div className="pr-[0px] pl-[0px] max-sm:pr-0 max-sm:pl-0">
          <div>
            <Navbar />
          </div>
          <div>
            <hr className="border border-1 border-[#000000] mt-[1px]" />
          </div>
          <div>
            <First />
          </div>
          {/* <div className="mb-[100px] max-sm:mb-[60px] ">
            <FirstSection />
          </div>
          <div className="mb-[100px] max-sm:mb-[0px] ">
            <SecondSection />
          </div>
          <div className="mb-[100px] max-sm:mb-[32px] ">
            <ThirdSection />
          </div>
          <div className="mb-[50px] ">
            <FourthSection />
          </div>
          <div className="mb-[100px] ">
            <FifthSection />
          </div>
          <div className="flex mb-[100px] ">
            <Roadmap />
          </div>
          <div
            className="flex justify-center mb-[64px] max-sm:justify-start max-sm:pr-[1.125rem] max-sm:pl-[1.125rem]"
            style={dropShadow}
          >
            {resolvedTheme === "dark" ? (
              <Image
                src={PulseDashDark}
                alt="PulseDashDark"
                className="max-sm:w-[100%]"
              />
            ) : (
              <>
                <Image
                  src={PulseDashLight}
                  alt="PulseDashLight"
                  className="max-sm:w-[100%]"
                />
              </>
            )}
          </div> */}
        </div>
      </div>
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}
