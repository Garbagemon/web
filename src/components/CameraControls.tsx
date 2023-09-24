import { MouseEventHandler, useState } from "react";
import Button from "./Button";
import MonsterPreview from "./MonsterPreview";

type CamClick = MouseEventHandler<HTMLDivElement>;

export default function CameraControls({
    onCloseClick,
    switchCamera,
    onCameraShutter,
}: {
    onCloseClick: CamClick;
    switchCamera: CamClick;
    onCameraShutter: CamClick;
}) {
    return (
        <div className="flex flex-row gap-16 p-2 rounded-[75px]">
            <Button onClick={onCloseClick}>
                <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M24.4583 2.45038L22.0496 0.041626L12.5 9.59121L2.95042 0.041626L0.541672 2.45038L10.0913 12L0.541672 21.5495L2.95042 23.9583L12.5 14.4087L22.0496 23.9583L24.4583 21.5495L14.9088 12L24.4583 2.45038Z"
                        fill="#4ade80"
                    />
                </svg>
            </Button>
            <Button onClick={onCameraShutter}>
                <svg width="52" height="52" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1" width="62" height="62" rx="31" fill="white" stroke="black" stroke-width="2" />
                </svg>
            </Button>
            <Button onClick={switchCamera}>
                <svg width="29" height="26" viewBox="0 0 29 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M25.5 3.375H21.1413L18.625 0.625H10.375L7.85875 3.375H3.5C1.9875 3.375 0.75 4.6125 0.75 6.125V22.625C0.75 24.1375 1.9875 25.375 3.5 25.375H25.5C27.0125 25.375 28.25 24.1375 28.25 22.625V6.125C28.25 4.6125 27.0125 3.375 25.5 3.375ZM14.5 21.25C10.705 21.25 7.625 18.17 7.625 14.375H4.875L8.3125 10.9375L11.75 14.375H9C9 17.4137 11.4613 19.875 14.5 19.875C15.2975 19.875 16.0538 19.6962 16.7275 19.3937L17.745 20.4112C16.7687 20.92 15.6825 21.25 14.5 21.25ZM20.6875 17.8125L17.25 14.375H20C20 11.3363 17.5387 8.875 14.5 8.875C13.7025 8.875 12.9462 9.05375 12.2725 9.35625L11.255 8.3525C12.2313 7.83 13.3175 7.5 14.5 7.5C18.295 7.5 21.375 10.58 21.375 14.375H24.125L20.6875 17.8125Z"
                        fill="#4ade80"
                    />
                </svg>
            </Button>
        </div>
    );
}
