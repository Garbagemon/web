import { MouseEventHandler, useState } from "react";
import Button from "./Button";
import { Monster } from "./MonsterPreview";
import {MonsterPreview} from "./MonsterPreview";

export default function Profile({monster}: {monster: Monster}) {
    return(
    <div padding-top >
        <MonsterPreview monster={monster} onClick={function(){}}/>
        <h1>{monster.name} - lvl {monster.level}</h1>
    <div> 
        <div className="rectangle">

        <div className="container">
            <div className="bar-container">
                <div className="experience-bar" style={{ width: `${monster.xp/300}%` }}></div>
                </div>

                <style jsx>{`
                .container {
                width: 90%;
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                }

                .bar-container {
                width: 100%;
                height: 15px;
                border: 1px solid black;
                background-color: #e0e0e0; 
                }

                .experience-bar {
                height: 100%;
                background-color: #4CAF50; 
                transition: width 0.3s;    
                }`}
                </style>
            </div>
        </div>
    </div>
</div>)
}