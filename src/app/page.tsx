"use client"
import Button from '@/components/Button';
import MonsterPreview from '@/components/MonsterPreview';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import Webcam from "react-webcam";

export default function Home() {
  const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    aspectRatio: 0.6666666667,
    facingMode: "environment"
  };

  const [location, setLocation] = useState({})
  const [useWebcam, setUseWebcam] = useState(false)
  
  useEffect(() => {
    if('geolocation' in navigator) {
        // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            setLocation({ latitude, longitude });
        })
    }
}, []);

  return (
    <div className="w-full h-full flex justify-center">
      { useWebcam ?
          <Webcam videoConstraints={videoConstraints} 
            width={480} 
            height={720}
          />
          :
          <></>
        }
      <div className="bottom-5 absolute">
        <Navbar cameraOnClick={() => setUseWebcam(!useWebcam)} onClick={function () { console.log("Hello! I'm clicked")}}></Navbar>
        {/* {JSON.stringify(location)} */}
      </div>
      <div className="w-full h-full bg-red-600">
        
      </div>
    </div>
  )
}
