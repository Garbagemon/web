import { MouseEventHandler, useState } from "react";
import Button from "./Button";
import { Monster } from "./MonsterPreview";
import {MonsterPreview} from "./MonsterPreview";

const percentage = 60;

export default function Profile({monster}: {monster: Monster}) {
    return(<div>
        <MonsterPreview monster={monster} onClick={function(){}}/>

        <div> 
            <div> 
                monster.level 
            </div>
            <div className="container">
                <h1>Experience Level</h1>

                <div className="bar-container">
                <div className="experience-bar" style={{ width: `${percentage}%` }}></div>
            </div>

            <style jsx>{`
                .container {
                width: 90%;
                max-width: 600px;
                margin: 50px auto;
                padding: 20px;
                border: 1px solid #ddd;
                box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
                }

                .bar-container {
                width: 100%;
                height: 30px;
                border: 1px solid black;
                background-color: #e0e0e0; 
                }

                .experience-bar {
                height: 100%;
                background-color: #4CAF50; 
                transition: width 0.3s;    
                }
            `}</style>
    </div>
        </div>
    </div>)
}