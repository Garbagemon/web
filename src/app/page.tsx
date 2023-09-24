"use client";
import Button from "@/components/Button";
import MonsterPreview from "@/components/MonsterPreview";
import Navbar from "@/components/Navbar";
import useGetUserData from "@/hooks/useGetUserData";
import { useEffect, useState } from "react";
import Webcam from "react-webcam";
import Map from "@/components/Map"
import CameraControls from '@/components/CameraControls';
import Settings from "@/components/settings";


export default function Home() {

  const [location, setLocation] = useState<Partial<GeolocationCoordinates>|null>()
  const [currentPage, setCurrentPage] = useState("home");
  const [facingUser, setFacingUser] = useState(false)

  const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    aspectRatio: 0.6666666667,
    facingMode: facingUser ? "user" : "environment"
  };
  
  useEffect(() => {
    if('geolocation' in navigator) {
        // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
        navigator.geolocation.getCurrentPosition(({ coords }) => {
            const { latitude, longitude } = coords;
            setLocation({ latitude, longitude });
        })
    }
}, []);

    const [visibleMap, setVisibleMap] = useState(true);
    const [userData, triggerRefresh] = useGetUserData({
        userId: "12ACE",
    });

    console.log(userData);

  if (currentPage == "home") {
    return (
    <div className="w-full h-full flex justify-center">
      <div className="bottom-5 absolute z-10">
        <Navbar
          cameraOnClick={() => setCurrentPage("camera")}
          onClick={function () { setVisibleMap(!visibleMap)}}
          settingsOnClick={() => { setCurrentPage("settings")}}
          ></Navbar>
      </div>
      {(visibleMap && location) ? (<Map location={location as GeolocationCoordinates}></Map>) : (<div> </div>)}
    </div>)
  } else if (currentPage == "camera") {
    return (<div className="w-full h-full flex justify-center">
      <div className="bottom-5 absolute z-10">
        <CameraControls onCloseClick={() => {setCurrentPage("home")}} switchCamera={() => { setFacingUser(!facingUser) }}></CameraControls>
      </div>
      <Webcam videoConstraints={videoConstraints} 
            width={480} 
            height={720}
            className="absolute z-20 rounded-[50px]"
          />
    </div>)
  } else if (currentPage == "settings") {
    return (<Settings/>)
  }
}
