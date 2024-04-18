"use client"
import React, {useState} from 'react'

export default function ColorPallete() {
    const [selectedColor, setSelectedColor] = useState("");
    console.log(selectedColor)
  return (
    <div className='w-full h-dvh z-20 bg-slate-200 flex flex-col items-center child-hover:cursor-pointer child-hover:shadow-xl child:rounded-full'>
      <div className={`h-10 w-10 mt-1 border border-white ${selectedColor? selectedColor : ''}`}></div>
      <div onClick={()=>{setSelectedColor("bg-white")}} className='h-10 w-10 mt-1 bg-white'></div>
      <div onClick={()=>{setSelectedColor("bg-lime-500")}} className='h-10 w-10 mt-1 bg-lime-500'></div>
      <div onClick={()=>{setSelectedColor("bg-yellow-500")}} className='h-10 w-10 mt-1 bg-yellow-500'></div>
      <div onClick={()=>{setSelectedColor("bg-orange-500")}} className='h-10 w-10 mt-1 bg-orange-500'></div>
      <div onClick={()=>{setSelectedColor("bg-red-500")}} className='h-10 w-10 mt-1 bg-red-500'></div>
      <div onClick={()=>{setSelectedColor("bg-sky-500")}} className='h-10 w-10 mt-1 bg-sky-500'></div>
      <div onClick={()=>{setSelectedColor("bg-violet-500")}} className='h-10 w-10 mt-1 bg-violet-500'></div>
      <div onClick={()=>{setSelectedColor("bg-purple-500")}} className='h-10 w-10 mt-1 bg-purple-500'></div>
      <div onClick={()=>{setSelectedColor("bg-gray-500")}} className='h-10 w-10 mt-1 bg-gray-500'></div>
      <div onClick={()=>{setSelectedColor("bg-zinc-700")}} className='h-10 w-10 mt-1 bg-zinc-700'></div>
    </div>
  )
}
