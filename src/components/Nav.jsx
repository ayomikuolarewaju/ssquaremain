"use client";
import React, { useEffect, useState } from "react";
import Link from "../../node_modules/next/link";
import Image from "../../node_modules/next/image";
import logo from "../../images/logos.png";
import Toggle from "/images/toogle-icon.png";
import { usePathname } from "../../node_modules/next/navigation";
import Caro from "./Caro";

function Nav() {
  const [isShow, setIsshow] = useState(false);
  const location = usePathname();
  const [url, setUrl] = useState(location);

  useEffect(() => {
    setUrl(location);
  }, [location]);
  const menu = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/contact", title: "Contact" },
    { href: "/services", title: "Service" },
    { href: "/team", title: "Team " },
  ];

  let [no, setNo] = useState(0);

  const increaseno = (a) => {
    if (no === 0 && no >= menu.length) {
      no = no + 1;
      setNo(a);
    } else {
      no = 0;
      setNo(a);
    }
  };

  return (
    <div
      className={
        url === "/"
          ? "bg-[url('../../images/banner-bg.png')]  bg-no-repeat bg-cover md:h-[700px] h-[80px] mx-auto w-full px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 flex justify-between text-white gap-3 items-start"
          : "bg-[url('../../images/banner-bg.png')]  bg-no-repeat bg-cover h-[80px] mx-auto w-full px-4 sm:px-8 md:px-16 xl:px-32 2xl:px-64 flex justify-between text-white gap-3 items-start"
      }
    >
      <div className="w-full flex items-center justify-start h-[90px] pt-2">
        <Link href="/" className="md:w-[60px] md:h-[60px] cursor-pointer">
          <Image src={logo} alt="logo" />
        </Link>
        <Link href="/">
          <p className="text-md text-[#420606] capitalize font-bold w-[220px] text-center">
            s.square consulting
          </p>
        </Link>
      </div>

      <div className="flex  flex-col justify-between gap-y-5 h-[80px] items-center w-full md:w-[300px] z-50">
        <div
          className="cursor-pointer w-[60px] h-[60px] z-50"
          onClick={() => setIsshow(!isShow)}
        >
          <Image className="pt-8" src={Toggle} alt="toggle menu" />
        </div>
        {isShow ? (
          <div className="flex flex-col gap-y-5 md:w-[300px] font-bold bg-[#B3973D] h-fit items-center relative p-10 rounded-lg">
            {menu.map((m, index) => (
              <div key={index} onClick={() => increaseno(index)}>
                {no === index ? (
                  <Link className="text-[#420606]" href={m.href}>
                    {m.title}
                  </Link>
                ) : (
                  <Link className="text-white" href={m.href}>
                    {m.title}
                  </Link>
                )}
              </div>
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Nav;
