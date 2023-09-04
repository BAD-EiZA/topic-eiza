import React from "react";
import Image from "next/image";
const Featured = () => {
  return (
    <div className="w-full h-20 bg-slate-200 flex justify-center mx-auto">
      <div className="flex items-center gap-4">
        <p className="font-semibold text-xl text-gray-400">Technologies: </p>
        <Image
          src={
            "https://freelogopng.com/images/all_img/1681038628chatgpt-icon-logo.png"
          }
          width={720}
          height={720}
          alt="GPT"
          className="w-24 h-8 "
        />
        <Image
          src={
            "https://static-00.iconduck.com/assets.00/nextjs-icon-512x512-11yvtwzn.png"
          }
          width={720}
          height={720}
          alt="GPT"
          className="w-8 h-8 "
        />
        <Image
          src={
            "https://cdn.icon-icons.com/icons2/3914/PNG/512/planetscale_logo_icon_248841.png"
          }
          width={720}
          height={720}
          alt="GPT"
          className="w-8 h-8 "
        />
      </div>
    </div>
  );
};

export default Featured;
