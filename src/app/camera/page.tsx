import CameraControls from "@/components/CameraControls";
import { useState } from "react";
import Webcam from "react-webcam";

export default async function Camera() {
  const [facingUser, setFacingUser] = useState(false)

  const videoConstraints = {
    width: { min: 480 },
    height: { min: 720 },
    aspectRatio: 0.6666666667,
    facingMode: facingUser ? "user" : "environment"
  };
  
  <div className="w-full h-full flex justify-center">
  <div className="bottom-5 absolute z-10">
    <CameraControls onCloseClick={() => {}} switchCamera={() => { setFacingUser(!facingUser) }}></CameraControls>
  </div>
  <Webcam videoConstraints={videoConstraints} 
        width={480} 
        height={720}
        className="absolute z-20 rounded-[50px]"
      />
</div>
}