"use client"

export type Monster = {
  name: string
  picture: string,
  level: number,
  xp: number
}

import Image from 'next/image'
import { MouseEventHandler } from 'react'

export function MonsterPreview({monster, onClick}: {monster: Monster, onClick: MouseEventHandler<HTMLDivElement>}) {
  return (
    <div className="rounded-full h-14 w-14 overflow-clip border-2 border-black bg-green-400 shadow-[0_0px_20px_rgba(0,0,0,0.55)]" onClick={onClick}>
       <Image
          src="/jugmon.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
    </div>
  )
}