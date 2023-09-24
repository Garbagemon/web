import { useEffect, useState } from "react";
import useCount from "./useCount";
import axios, { AxiosResponse } from "axios";

export interface UserData {
    code: number;
    data?: {
        collection: Record<string, number>;
    };
    userId: string;
}

export interface useGetUserDataProps {
    userId: string;
}

export default function useGetUserData(props: useGetUserDataProps) {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const [refresh, triggerRefresh] = useCount();

    useEffect(() => {
        const BACKEND_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL as string}/get-userdata`;

        setIsLoading(true);
        axios
            .get<any, AxiosResponse<UserData>>(BACKEND_URL, {
                params: {
                    userId: props.userId,
                },
            })
            .then((value) => {
                setUserData(value.data);
            })
            .finally(() => {
                console.log("Requested user data", props.userId);
                setIsLoading(false);
            });
    }, [refresh, props.userId]);

    return [userData, isLoading, triggerRefresh];
}
