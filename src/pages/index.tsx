import Head from "next/head";
import First from "../components/First";
import Navbar from "../components/Navbar/Navbar";

export default function Home(props: any) {

  return (
    <div className="">
      <Head>
        <title>HotelBooking</title>
        <meta name="HotelBooking" content="HotelBooking" />
      </Head>
      <div
        className="FlexCenter overflow-hidden
      max-sm:flex max-sm:justify-start  max-sm:max-w-[100vw] max-sm:overflow-hidden max-sm:pr-[1px] max-sm:pl-[1px] ">
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
        </div>
      </div>
    </div>
  );
}
