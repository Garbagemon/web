import { MouseEventHandler, useEffect, useState } from "react";
import Button from "./Button";
import { Monster, MonsterPreview } from "./MonsterPreview";


export default function Navbar({monster, cameraOnClick, onClick, settingsOnClick}: {monster: Monster, cameraOnClick: MouseEventHandler<HTMLDivElement>, onClick: MouseEventHandler<HTMLDivElement>, settingsOnClick:  MouseEventHandler<HTMLDivElement>}) {
  const [musicOn, setMusicOn] = useState(true)

  let audio = new Audio("/music.mp3")

  useEffect(() => {
    if (musicOn) {
      audio.play()
    } else {
      audio.pause()
    };
  }, [musicOn])
  
  return (
    <div className="flex flex-row gap-16 p-2 rounded-[75px]">
      <MonsterPreview monster={monster} onClick={onClick}/>
        <Button onClick={cameraOnClick}>
          <svg width="35" height="35" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_5)">
              <path d="M26 34.9333C29.8292 34.9333 32.9333 31.8292 32.9333 28C32.9333 24.1708 29.8292 21.0667 26 21.0667C22.1708 21.0667 19.0667 24.1708 19.0667 28C19.0667 31.8292 22.1708 34.9333 26 34.9333Z" fill="white"/>
              <path d="M19.5 6.33334L15.535 10.6667H8.66667C6.28333 10.6667 4.33333 12.6167 4.33333 15V41C4.33333 43.3833 6.28333 45.3333 8.66667 45.3333H43.3333C45.7167 45.3333 47.6667 43.3833 47.6667 41V15C47.6667 12.6167 45.7167 10.6667 43.3333 10.6667H36.465L32.5 6.33334H19.5ZM26 38.8333C20.02 38.8333 15.1667 33.98 15.1667 28C15.1667 22.02 20.02 17.1667 26 17.1667C31.98 17.1667 36.8333 22.02 36.8333 28C36.8333 33.98 31.98 38.8333 26 38.8333Z" fill="white"/>
            </g>
            <defs>
              <clipPath id="clip0_2_5">
                <rect width="52" height="52" fill="white"/>
              </clipPath>
            </defs>
          </svg>
        </Button>
        <Button onClick={() => {setMusicOn(!musicOn)}}>
        {(musicOn) ? (<svg width="20" height="30" viewBox="0 0 48 72" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 0V42.2C21.64 40.84 18.92 40 16 40C7.16 40 0 47.16 0 56C0 64.84 7.16 72 16 72C24.84 72 32 64.84 32 56V16H48V0H24Z" fill="white"/>
        </svg>) : (<svg width="25" height="30" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.08 0L0 5.08L36 41.08V42.2C33.64 40.84 30.92 40 28 40C19.16 40 12 47.16 12 56C12 64.84 19.16 72 28 72C36.84 72 44 64.84 44 56V49.08L66.92 72L72 66.92L5.08 0ZM44 16H60V0H36V20.72L44 28.72V16Z" fill="white"/></svg>)}
        </Button>
    </div>
  )
}