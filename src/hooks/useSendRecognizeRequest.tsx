import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

export interface useSendRecognizeRequestProps {
    userId: string;
    base64Image: string | undefined;
}

export interface RecognizeResponse {
    code: number;
    message: string;
}

export default function useSendRecognizeRequest(props: useSendRecognizeRequestProps) {
    const [isSuccess, setIsSuccess] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!props.base64Image) return;

        const { userId, base64Image: image } = props;
        const BACKEND_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/recognize`;

        setIsSuccess(false);
        setIsLoading(true);

        console.log("sending:", image);
        const imagePost = axios.post<any, AxiosResponse<RecognizeResponse>>(BACKEND_URL, {
            userId,
            image,
        });

        imagePost.then((value) => {
            setIsSuccess(true);
        });

        imagePost.finally(() => setIsLoading(false));
    }, [props]);

    return [isSuccess, isLoading];
}
