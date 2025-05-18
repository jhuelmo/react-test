import { loadMapApi } from "@/utils/mapUtils";
import { useEffect, useState } from "react";

import Map from "./map";

export default function MapLoader() {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        const googleMapScript = loadMapApi();

        googleMapScript.addEventListener("load", function () {
            setScriptLoaded(true);
        });
    }, []);

    return <>{scriptLoaded && <Map />}</>;
}
