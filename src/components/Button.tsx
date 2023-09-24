import { MouseEventHandler, ReactNode } from "react";


export default function Button({children, onClick}: { children: ReactNode, onClick?: MouseEventHandler<HTMLDivElement>}) {
  return (
    <div className="w-20 h-20 bg-white text-white rounded-full flex justify-center items-center" onClick={onClick}>
      {children}
    </div>
  )
}