"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState, useRef, useCallback } from "react";
import Webcam from "react-webcam";
import Map from "@/components/Map";
import CameraControls from "@/components/CameraControls";
import axios, { AxiosResponse } from "axios";
import { RecognizeResponse } from "@/hooks/useSendRecognizeRequest";

export default function Home() {
    const [location, setLocation] = useState<Partial<GeolocationCoordinates> | null>();
    const [currentPage, setCurrentPage] = useState("home");
    const [facingUser, setFacingUser] = useState(false);
    const [base64Image, setBase64Image] = useState<string | undefined>(undefined);

    const videoConstraints = {
        width: { min: 480 },
        height: { min: 720 },
        aspectRatio: 0.6666666667,
        facingMode: facingUser ? "user" : "environment",
    };

    useEffect(() => {
        if ("geolocation" in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                setLocation({ latitude, longitude });
            });
        }
    }, []);

    const webcamRef = useRef<Webcam | null>(null);
    const capture = useCallback(() => {
        if (!webcamRef.current) return;
        const imageSrc = webcamRef.current.getScreenshot();

        if (!imageSrc) return;
        const base64part = imageSrc.split("data:image/jpeg;base64,")[1];

        if (base64part) setBase64Image(base64part);
    }, [webcamRef]);

    const [visibleMap, setVisibleMap] = useState(true);

    useEffect(() => {
        if (!base64Image) return;

        const BACKEND_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/recognize`;

        console.log("sending:", base64Image);
        const imagePost = axios.post<any, AxiosResponse<RecognizeResponse>>(BACKEND_URL, {
            userId: "Parth099",
            image: base64Image,
        });
    }, [base64Image]);

    if (currentPage == "home") {
        return (
            <div className="w-full h-full flex justify-center">
                <div className="bottom-5 absolute z-10">
                    <Navbar
                        cameraOnClick={() => setCurrentPage("camera")}
                        onClick={function () {
                            setVisibleMap(!visibleMap);
                        }}
                        settingsOnClick={() => {}}
                    ></Navbar>
                </div>
                {visibleMap && location ? <Map location={location as GeolocationCoordinates}></Map> : <div> </div>}
            </div>
        );
    } else if (currentPage == "camera") {
        return (
            <div className="w-full h-full flex justify-center">
                <div className="bottom-5 absolute z-10">
                    <CameraControls
                        onCloseClick={() => {
                            setCurrentPage("home");
                        }}
                        switchCamera={() => {
                            setFacingUser(!facingUser);
                        }}
                        onCameraShutter={capture}
                    ></CameraControls>
                </div>
                <Webcam
                    screenshotFormat="image/jpeg"
                    videoConstraints={videoConstraints}
                    width={480}
                    height={720}
                    className="absolute z-20 rounded-[50px]"
                    ref={webcamRef}
                />
            </div>
        );
    }
}
