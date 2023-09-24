"use client";
import Navbar from "@/components/Navbar";
import { useEffect, useState, useRef, useCallback, FormEventHandler } from "react";
import Webcam from "react-webcam";
import Map from "@/components/Map";
import CameraControls from "@/components/CameraControls";
import axios, { AxiosResponse } from "axios";
import { RecognizeResponse } from "@/hooks/useSendRecognizeRequest";
import Profile from "@/components/Profile";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import useGetUserData from "@/hooks/useGetUserData";
import { Monster } from "@/components/MonsterPreview";
import Settings from "@/components/settings";
import Image from "next/image";

export default function Home() {
    const { width, height } = useWindowSize();
    const [location, setLocation] = useState<Partial<GeolocationCoordinates> | null>();
    const [currentPage, setCurrentPage] = useState("home");
    const [facingUser, setFacingUser] = useState(false);
    const [base64Image, setBase64Image] = useState<string | undefined>(undefined);
    const [pointValue, setPointValue] = useState(0);

    const userIdField = useRef<HTMLInputElement | null>(null);

    const [monster, setMonster] = useState<Monster>({
        name: "Bottlemon",
        picture: "/bottlemon.png",
        level: Math.ceil(pointValue / 50),
        xp: pointValue,
    });

    useEffect(() => {
        const level = Math.ceil(pointValue / 50);

        if (level > 5) {
            setMonster({
                name: "Gallonmon",
                picture: "/gallonmon.png",
                level: Math.ceil(pointValue / 50),
                xp: pointValue,
            });
        } else if (level > 10) {
            setMonster({
                name: "Jugmon",
                picture: "/jugmon.png",
                level: Math.ceil(pointValue / 50.0),
                xp: pointValue,
            });
        }
    }, [pointValue]);

    const [userId, setUserId] = useState<string | null>();
    const [userData, isLoading, triggerRefresh] = useGetUserData({ userId });

    const videoConstraints = {
        width: { min: 400 },
        aspectRatio: 0.5,
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
        console.log(userData);
    }, [isLoading]);

    useEffect(() => {
        if (!userData) return;
        if (!userData.data) return;

        let points = 0;

        const { collection } = userData.data;

        Object.keys(collection).forEach((key) => {
            if (typeof collection[key] === "number") {
                points += collection[key];
            }
        });

        setPointValue(points);
    }, [userData]);

    const webcamRef = useRef<Webcam | null>(null);
    const capture = useCallback(() => {
        if (!webcamRef.current) return;
        const imageSrc = webcamRef.current.getScreenshot();

        if (!imageSrc) return;
        const base64part = imageSrc.split("data:image/jpeg;base64,")[1];

        if (base64part) setBase64Image(base64part);
    }, [webcamRef]);

    useEffect(() => {
        if (!base64Image || !userId) return;

        const BACKEND_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/recognize`;

        console.log("sending:", base64Image);
        const imagePost = axios.post<any, AxiosResponse<RecognizeResponse>>(BACKEND_URL, {
            userId,
            image: base64Image,
        });

        imagePost.finally(() => triggerRefresh());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [base64Image]);

    const userIdSubmit: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        if (!userIdField.current?.value) return;
        setUserId(userIdField.current?.value);
    };

    if (!userId) {
        return (
            <div className="absolute top-0 left-0 flex justify-center items-center w-screen h-screen bg-gray-200/70 p-5 text-black">
                <form className="bg-white rounded-lg shadow-lg p-4 border flex flex-col gap-4 md:min-w-[350px]" onSubmit={userIdSubmit}>
                    <Image src="/LitterCrittersShadow.png" width="500" height="500" alt="Litter Critters logo" />
                    <label htmlFor="userId-field" className="text-xl font-bold ">
                        Select a Username:
                    </label>
                    <input
                        type="text"
                        minLength={5}
                        ref={userIdField}
                        className="p-2 text-lg border rounded shadow-md font-semibold"
                        id="userId-field"
                    />
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" type="submit">
                        Submit
                    </button>
                    <hr />
                    <div className="flex flex-col gap-1">
                        <small>*Usernames needs to be of length 5 or higher.</small>
                        <small>**Auth will be implemented in the future.</small>
                    </div>
                </form>
            </div>
        );
    }

    if (currentPage == "home") {
        return (
            <div className="w-full h-full flex justify-center">
                <div className="top-5 absolute z-10 px-10 py-3 rounded-full overflow-auto">
                    <Image src="/LitterCrittersShadow.png" width="500" height="500" alt="Litter Critters logo" />
                </div>
                <div className="bottom-5 absolute z-10">
                    <Navbar
                        cameraOnClick={() => setCurrentPage("camera")}
                        onClick={function () {
                            setCurrentPage("profile");
                        }}
                        settingsOnClick={() => {
                            setCurrentPage("settings");
                        }}
                        monster={monster}
                    ></Navbar>
                </div>
                {location ? <Map location={location as GeolocationCoordinates}></Map> : <div> </div>}
            </div>
        );
    } else if (currentPage == "camera") {
        return (
            <div className="w-full h-full flex justify-center bg-white p-10">
                {/* <Confetti
                    width={width}
                    height={height}
                /> */}
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
                <Webcam screenshotFormat="image/jpeg" videoConstraints={videoConstraints} width={400} height={800} className="" ref={webcamRef} />
            </div>
        );
    } else if (currentPage == "profile") {
        return (
            <Profile
                monster={monster}
                onClick={() => {
                    setCurrentPage("home");
                }}
            />
        );
    }
}
