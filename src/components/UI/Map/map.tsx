import { useEffect, useRef } from "react";
import { createRoot } from "react-dom/client";
import Location from "../Icons/location";

export default function Map() {
    const mapRef = useRef<HTMLDivElement>(null);
    let map;

    useEffect(() => {
        initMap();
    }, []);

    async function initMap(): Promise<void> {
        if (!window.google || !mapRef.current) return;

        const styledMapType = new google.maps.StyledMapType(
            [
                {
                    featureType: "landscape.natural.landcover",
                    elementType: "geometry.fill",
                    stylers: [
                        {
                            color: "#f0e8d6",
                        },
                    ],
                },
                {
                    featureType: "landscape.natural",
                    elementType: "geometry",
                    stylers: [{ color: "#a3c7a3" }],
                },
                {
                    featureType: "water",
                    elementType: "geometry.fill",
                    stylers: [{ color: "#ddf0f0" }],
                },
                {
                    featureType: "water",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#92998d" }],
                },
            ],
            { name: "Styled Map" }
        );

        const position = { lat: 40.405262482261776, lng: -3.69021956301151381 };
        const { Map } = (await google.maps.importLibrary(
            "maps"
        )) as google.maps.MapsLibrary;
        const { AdvancedMarkerElement } = (await google.maps.importLibrary(
            "marker"
        )) as google.maps.MarkerLibrary;

        map = new Map(mapRef.current, {
            zoom: 3,
            scrollwheel: false,
            center: position,
            mapId: "Test-React-Map",
            mapTypeControlOptions: {
                mapTypeIds: [
                    "roadmap",
                    "satellite",
                    "hybrid",
                    "terrain",
                    "styled_map",
                ],
            },
        });

        map.mapTypes.set("styled_map", styledMapType);
        map.setMapTypeId("styled_map");

        const markerElement = document.createElement("div");
        const root = createRoot(markerElement);
        root.render(<Location size={32} color="rgb(85, 204, 219)" />);

        const marker = new AdvancedMarkerElement({
            map: map,
            position: position,
            title: "Spain",
            content: markerElement,
        });
    }

    return (
        <>
            <div ref={mapRef} style={{ width: "100%", flex: "1" }} />
        </>
    );
}
