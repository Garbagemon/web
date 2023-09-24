import React, { useState } from "react";

export default function useCount() {
    const [refresh, setRefresh] = useState(0);
    return [refresh, setRefresh];
}
