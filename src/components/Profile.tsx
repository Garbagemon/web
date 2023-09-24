import { MouseEventHandler, useState } from "react";
import Button from "./Button";
import { Monster } from "./MonsterPreview";
import Image from "next/image";

export default function Profile({ monster, onClick }: { monster: Monster; onClick: MouseEventHandler<HTMLDivElement> }) {
    return (
        <div className="w-full h-full bg-white flex justify-center">
            <div className="md:w-1/4 w-full flex items-center gap-5 flex-col p-10 bg-white text-black text-2xl font-extrabold">
                <div className="rounded-full h-40 w-40 overflow-clip border-2 border-black bg-white ">
                    <Image src={monster.picture} width={500} height={500} alt="Picture of the author" />
                </div>
                <h1 className=" select-none text-[2rem]">{monster.name}</h1>
                <h1 className="font-medium text-[1.7rem]"> Level {monster.level} </h1>
                <div className="flex flex-start flex-col w-full font-normal text-md gap-2">
                    <h1>{monster.xp % 50} / 50 XP</h1>
                    <div className="h-6 w-full bg-slate-200 rounded-full border-2 border-black flex flex-start overflow-clip">
                        <div className={`bg-green-400`} style={{ width: `${monster.xp / 100.0}%` }}></div>
                    </div>
                    <h1>Overall Lifetime: {monster.xp}</h1>
                </div>
                <div className="absolute bottom-5 rounded-full bg-green-400 p-5 border-2 border-black " onClick={onClick}>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M24.4583 2.45038L22.0496 0.041626L12.5 9.59121L2.95042 0.041626L0.541672 2.45038L10.0913 12L0.541672 21.5495L2.95042 23.9583L12.5 14.4087L22.0496 23.9583L24.4583 21.5495L14.9088 12L24.4583 2.45038Z"
                            fill="white"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}
