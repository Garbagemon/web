"use client"

type Monster = {
  name: String
  picture: String,
  level: Number,
  xp: Number
}

import Image from 'next/image'
import { MouseEventHandler } from 'react'

export default function MonsterPreview({monster, onClick}: {monster: Monster, onClick: MouseEventHandler<HTMLDivElement>}) {
  return (
    <div className="rounded-full h-14 w-14 overflow-clip border-2 bg-white shadow-[0_0px_20px_rgba(0,0,0,0.55)]" onClick={onClick}>
       <Image
          src="/jugmon.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
    </div>
  )
}