import Image from "next/image";
import { useTheme } from "next-themes";
import React, { useContext } from "react";
import { ThemeContext } from "./Layout";

type Props = {
  dark: string;
  light: string;
};

function Icons({ dark, light }: Props) {
  const [resolvedTheme, setTheme] = useContext(ThemeContext);

  return (
    <div className="drop-shadow-[(0px_225px_90px_rgba(0,0,0,0.01))_drop-shadow(0px_127px_76px_rgba(0,0,0,0.05))_drop-shadow(0px_56px_56px_rgba(0,0,0,0.09))_drop-shadow(0px_14px_31px_rgba(0,0,0,0.1))_drop-shadow(0px_0px_0px_rgba(0,0,0,0.1))]">
      {resolvedTheme === "dark" ? (
        <Image
          src={dark}
          alt="icon"
          className="w-[72px] h-[72px] max-sm:w-[46px] max-sm:h-[46px]"
          width={72}
          height={72}
        />
      ) : (
        <Image
          src={light}
          alt="icon"
          className="w-[72px] h-[72px] max-sm:w-[46px] max-sm:h-[46px]"
          width={72}
          height={72}
        />
      )}
    </div>
  );
}

export default Icons;
