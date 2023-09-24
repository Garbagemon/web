"use client"

type Monster = {
  name: String
  picture: String,
  level: Number,
  xp: Number
}

import Image from 'next/image'

export default function MonsterPreview({monster}: {monster: Monster}) {
  return (
    <div className="rounded-full h-20 w-20 overflow-clip border-2 bg-white">
       <Image
          src="/jugmon.png"
          width={500}
          height={500}
          alt="Picture of the author"
        />
    </div>
  )
}