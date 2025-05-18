//Function to load the map api library
export const loadMapApi = () => {
    //API KEY FOR GOOGLE MAPS HERE
    const mapsURL = `https://maps.googleapis.com/maps/api/js?key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
    }`;

    const scripts = document.getElementsByTagName("script");

    // iterate all the scripts to see if the scripts are already loaded
    for (let i = 0; i < scripts.length; i++) {
        if (scripts[i].src.indexOf(mapsURL) === 0) {
            return scripts[i];
        }
    }

    //Instanntiate the google map script as said in documentation
    const googleMapScript = document.createElement("script");
    googleMapScript.src = mapsURL;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);

    return googleMapScript;
};
