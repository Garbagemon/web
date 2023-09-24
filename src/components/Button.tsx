import { MouseEventHandler, ReactNode } from "react";


export default function Button({children, onClick}: { children: ReactNode, onClick?: MouseEventHandler<HTMLDivElement>}) {
  return (
    <div className="w-14 h-14 bg-white text-white rounded-full flex justify-center items-center shadow-[0_0px_20px_rgba(0,0,0,0.55)]" onClick={onClick}>
      {children}
    </div>
  )
}