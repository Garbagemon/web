import { MouseEventHandler, useState } from "react";
import Button from "./Button";
import MonsterPreview from "./MonsterPreview";


export default function Navbar({cameraOnClick, onClick}: {cameraOnClick: MouseEventHandler<HTMLDivElement>, onClick: MouseEventHandler<HTMLDivElement>}) {
  return (
    <div className="flex flex-row gap-16 p-2 rounded-[75px]">
      <MonsterPreview monster={{
          name: 'Watermon',
          picture: './watermon.png',
          level: 9,
          xp: 9000
        }} onClick={onClick}/>
        <Button onClick={cameraOnClick}>
          <svg width="35" height="35" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_5)">
              <path d="M26 34.9333C29.8292 34.9333 32.9333 31.8292 32.9333 28C32.9333 24.1708 29.8292 21.0667 26 21.0667C22.1708 21.0667 19.0667 24.1708 19.0667 28C19.0667 31.8292 22.1708 34.9333 26 34.9333Z" fill="#4ade80"/>
              <path d="M19.5 6.33334L15.535 10.6667H8.66667C6.28333 10.6667 4.33333 12.6167 4.33333 15V41C4.33333 43.3833 6.28333 45.3333 8.66667 45.3333H43.3333C45.7167 45.3333 47.6667 43.3833 47.6667 41V15C47.6667 12.6167 45.7167 10.6667 43.3333 10.6667H36.465L32.5 6.33334H19.5ZM26 38.8333C20.02 38.8333 15.1667 33.98 15.1667 28C15.1667 22.02 20.02 17.1667 26 17.1667C31.98 17.1667 36.8333 22.02 36.8333 28C36.8333 33.98 31.98 38.8333 26 38.8333Z" fill="#4ade80"/>
            </g>
            <defs>
              <clipPath id="clip0_2_5">
                <rect width="52" height="52" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </Button>
        <Button>
          <svg width="35" height="35" viewBox="0 0 30 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M26.305 17.4883C26.3683 17.0133 26.4 16.5225 26.4 16C26.4 15.4933 26.3683 14.9867 26.2892 14.5117L29.5033 12.01C29.7883 11.7883 29.8675 11.3608 29.6933 11.0442L26.6533 5.78749C26.4633 5.43915 26.0675 5.32832 25.7192 5.43915L21.935 6.95915C21.1433 6.35749 20.3042 5.85082 19.37 5.47082L18.8 1.44915C18.7367 1.06915 18.42 0.799988 18.04 0.799988H11.96C11.58 0.799988 11.2792 1.06915 11.2158 1.44915L10.6458 5.47082C9.71167 5.85082 8.85667 6.37332 8.08084 6.95915L4.29667 5.43915C3.94834 5.31249 3.5525 5.43915 3.3625 5.78749L0.338337 11.0442C0.148337 11.3767 0.21167 11.7883 0.528336 12.01L3.7425 14.5117C3.66334 14.9867 3.6 15.5092 3.6 16C3.6 16.4908 3.63167 17.0133 3.71084 17.4883L0.49667 19.99C0.21167 20.2117 0.132503 20.6392 0.30667 20.9558L3.34667 26.2125C3.53667 26.5608 3.9325 26.6717 4.28084 26.5608L8.065 25.0408C8.85667 25.6425 9.69584 26.1492 10.63 26.5292L11.2 30.5508C11.2792 30.9308 11.58 31.2 11.96 31.2H18.04C18.42 31.2 18.7367 30.9308 18.7842 30.5508L19.3542 26.5292C20.2883 26.1492 21.1433 25.6425 21.9192 25.0408L25.7033 26.5608C26.0517 26.6875 26.4475 26.5608 26.6375 26.2125L29.6775 20.9558C29.8675 20.6075 29.7883 20.2117 29.4875 19.99L26.305 17.4883ZM15 21.7C11.865 21.7 9.3 19.135 9.3 16C9.3 12.865 11.865 10.3 15 10.3C18.135 10.3 20.7 12.865 20.7 16C20.7 19.135 18.135 21.7 15 21.7Z" fill="#4ade80"/>
          </svg>
        </Button>
    </div>
  )
}