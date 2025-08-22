import { useState } from "react";

const useDescShow = () => {
    const [isDesc, setIsDesc] = useState(false);
    const onOpenDesc = () => {
        setIsDesc(true);
    };
    const onCloseDesc = () => {
        setIsDesc(false);
    };

    return { onCloseDesc, onOpenDesc, isDesc };
}

export default useDescShow;