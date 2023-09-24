import React, { Dispatch, useState } from "react";

type useCountReturnType = [number, () => void];

export default function useCount(): useCountReturnType {
    const [refresh, __setRefresh] = useState(0);

    const setRefresh = () => __setRefresh((prev) => prev + 1);

    return [refresh, setRefresh];
}
