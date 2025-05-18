// Map styling configuration
export const mapStyles = [
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
];

// Default map position (Spain)
export const defaultPosition = {
    lat: 40.405262482261776,
    lng: -3.69021956301151381,
};

// Map configuration options
export const mapOptions: google.maps.MapOptions = {
    zoom: 3,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeControl: false,
    mapId: "Test-React-Map",
    mapTypeControlOptions: {
        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "styled_map"],
    },
};

// Marker configuration
export const markerConfig = {
    title: "Spain",
    size: 32,
    color: "rgb(85, 204, 219)",
};
