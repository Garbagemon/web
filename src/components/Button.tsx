import { MouseEventHandler, ReactNode } from "react";


export default function Button({children, onClick}: { children: ReactNode, onClick?: MouseEventHandler<HTMLDivElement>}) {
  return (
    <div className="w-14 h-14 bg-green-400 text-white rounded-full flex justify-center items-center border-black border-2" onClick={onClick}>
      {children}
    </div>
  )
}