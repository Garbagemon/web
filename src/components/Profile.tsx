import { MouseEventHandler, useState } from "react";
import Button from "./Button";
import { Monster } from "./MonsterPreview";
import Image from 'next/image'

export default function Profile({monster}: {monster: Monster}) {
    return(
    <div className="md:w-1/4 w-full flex items-center gap-5 flex-col p-10 bg-white text-black text-2xl font-extrabold">
        <div className="rounded-full h-4o w-40 overflow-clip border-2 bg-white ">
            <Image src="/jugmon.png" width={500} height={500} alt="Picture of the author"/>
        </div>
        <h1 className=" select-none">{monster.name} - lvl {monster.level.toString()}</h1>
    </div>)
}