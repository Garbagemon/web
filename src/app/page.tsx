"use client"
import Button from '@/components/Button';
import MonsterPreview from '@/components/MonsterPreview';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';
import Webcam from "react-webcam";
import Map from "@/components/Map"


export default function Home() {
  const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    aspectRatio: 0.6666666667,
    facingMode: "environment"
  };

  const [location, setLocation] = useState<Partial<GeolocationCoordinates>|null>()
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

  const [visibleMap, setVisibleMap] = useState(true)

  return (
    <div className="w-full h-full flex justify-center">
      { useWebcam ?
          <Webcam videoConstraints={videoConstraints} 
            width={480} 
            height={720}
            className="absolute z-20 rounded-[50px]"
          />
          :
          <></>
        }
      <div className="bottom-5 absolute z-10">
        <Navbar cameraOnClick={() => setUseWebcam(!useWebcam)} onClick={function () { setVisibleMap(!visibleMap)}}></Navbar>
        
      </div>
      {(visibleMap && location) ? (<Map location={location as GeolocationCoordinates}></Map>) : (<div> </div>)}
    </div>
  )
}
