"use client";

import React, { useEffect, useState } from "react";
import img1 from "../../images/img-9.png";
import img2 from "../../images/img-10.png";
import img3 from "../../images/img-11.png";
import img4 from "../../images/img-12.png";
import img5 from "../../images/img-13.png";
import img6 from "../../images/img-14.png";
import Image from "next/image";

const Caro = () => {
  let [no, setNo] = useState(0);
  const listImg = [img1, img2, img3, img4, img5, img6];

  useEffect(() => {
    if (no === listImg.length) {
      setNo(0);
    } else {
      setTimeout(() => setNo(no + 1), 5000);
    }
  }, [no, listImg.length]);

  return (
    <div className="w-full h-[700px] z-2 flex justify-center items-center translate-y-[150px]">
      <Image
        src={listImg?.at(no)}
        alt="sliders"
        className="w-full h-[700px] bg-contain bg-no-repeat"
      />
    </div>
  );
};

export default Caro;
