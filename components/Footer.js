import React from "react";
import { RiArtboardLine } from "react-icons/ri";
import { RxText } from "react-icons/rx";
import { RxValue } from "react-icons/rx";
import { RxVercelLogo } from "react-icons/rx";
import { RxBox } from "react-icons/rx";
import { BsBrush } from "react-icons/bs";
import { RxEraser } from "react-icons/rx";
import { TbGeometry } from "react-icons/tb";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <div className="w-full h-14 bg-gray-200 flex justify-center items-center">
      <div className="w-1/4 h-full flex justify-center items-center child:text-gray-900 child:text-4xl">
        <TbGeometry />
      </div>
      <div className="w-2/4 gap-2 h-full flex justify-center items-center group child:text-gray-900 child:h-12 child:w-9 child:text-4xl child-hover:bg-gray-300 child-hover:cursor-pointer">
        <RiArtboardLine />
        <RxText />
        <RxValue />
        <RxVercelLogo />
        <RxBox />
        <BsBrush />
        <RxEraser />
      </div>
      <div
        className="w-1/4 h-full child:h-12 child:w-9
 child-hover:bg-gray-300 gap-4 flex justify-center items-center child:text-gray-900 child:text-4xl child-hover:cursor-pointer"
      >
        <HiMiniUserCircle />
        <IoMoonOutline />
        <IoSunnyOutline />
      </div>
    </div>
  );
}
