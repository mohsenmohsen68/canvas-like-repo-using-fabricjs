"use client";
import Canvas from "../../components/Canvas";
import React,{useState} from "react";
import { RiArtboardLine } from "react-icons/ri";
import { TbGeometry } from "react-icons/tb";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoMoonOutline } from "react-icons/io5";
import { IoSunnyOutline } from "react-icons/io5";

export default function Home() {
  const [createNewCanvas, setCreateNewCanvas] = useState(false);
  const removeHandler = () =>{
    setCreateNewCanvas(false)
  }
  return (
    <>
      <div className="w-full h-14 bg-gray-200 flex justify-center items-center">
        <div className="w-1/4 h-full flex justify-center items-center child:text-gray-900 child:text-4xl">
          <TbGeometry />
        </div>
        <div className="w-2/4 gap-2 h-full flex justify-center items-center group child:text-gray-900 child:text-4xl child-hover:shadow-xl child-hover:cursor-pointer">
          <RiArtboardLine onClick={()=>{setCreateNewCanvas(true)}}/>
        </div>
        <div className="w-1/4 h-full child-hover:shadow-xl gap-4 flex justify-center items-center child:text-gray-900 child:text-4xl child-hover:cursor-pointer">
          <HiMiniUserCircle />
          <IoMoonOutline />
          <IoSunnyOutline />
        </div>
      </div>
      {createNewCanvas && <Canvas onRemove = {removeHandler} />}
    </>
  );

  // ;
}
