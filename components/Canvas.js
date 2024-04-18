import CanvasHeader from "./CanvasHeader";
import ColorPallete from "./ColorPallete";
import React, { useEffect, useState } from "react";
import { fabric } from "fabric"; // v5
import { RxText } from "react-icons/rx";
import { RxValue } from "react-icons/rx";
import { RxVercelLogo } from "react-icons/rx";
import { RxBox } from "react-icons/rx";
import { BsBrush } from "react-icons/bs";
import { RxEraser } from "react-icons/rx";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FiSave } from "react-icons/fi";



export default function Canvas({onRemove}) {
  const [showCanvas, setShowCanvas] = useState(false);

const closeHandler = ()=>{
  onRemove()
}

  useEffect(() => {
    const canvas = new fabric.Canvas("c");
    const rect = new fabric.Circle({
      radius: 48,
      fill: "red",
      stroke: 2,
      visible: true
    });
    rect.bringToFront();
    canvas.add(rect);
    canvas.renderAll();
  }, []);

  return (
    <div>
      <div className="w-full h-14 bg-gray-200 flex justify-center items-center">
        <div className="w-full gap-2 h-full flex justify-evenly items-center group ">
          {/* <RiArtboardLine /> */}
          <div className="flex gap-1 child:text-gray-900 child:text-4xl child-hover:shadow-xl child-hover:cursor-pointer">
          <IoIosCloseCircleOutline onClick={closeHandler}/>
          <FiSave/>
          </div>
          <div className="flex gap-1 child:text-gray-900 child:text-4xl child-hover:shadow-xl child-hover:cursor-pointer">
            <RxText />
            <RxValue />
            <RxVercelLogo />
            <RxBox />
            <BsBrush />
            <RxEraser />
          </div>
        </div>
      </div>
      <div className="flex w-full">
        <div className="w-[95%] bg-zinc-100 ">
          {showCanvas && (
            <canvas
              height={400}
              width={700}
              style={{ border: "2px solid black" }}
              id="c"
            />
          )}
        </div>
        <div className="w-[5%] bg-yellow-300">
          <ColorPallete />
        </div>
      </div>
    </div>
  );
}
