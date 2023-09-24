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
    <div className="rounded-full h-20 w-20 overflow-clip border-2 bg-white" onClick={onClick}>
       <Image
          src="/jugmon.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
    </div>
  )
}