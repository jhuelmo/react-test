import { useScroll } from "@/context/scrollContext";
import HeroSection from "./HeroSection/heroSection";
import "./main.css";
import Section from "./Section/section";
import { useEffect, useRef } from "react";

//TODO: Create googleMap component
//TODO: Create map
export function Main() {
    const { section1Ref, section2Ref } = useScroll();

    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!window.google || !mapRef.current) return;

        const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: -34.397, lng: 150.644 }, // Cambia esto según tu ubicación
            zoom: 3,
            scrollwheel: false,
        });

        new window.google.maps.Marker({
            position: { lat: -34.397, lng: 150.644 },
            map,
            title: "Ubicación",
        });
    }, []);

    return (
        <main className="main-container">
            <HeroSection />
            <Section ref={section1Ref} id="map">
                <p style={{ width: "100%", height: "25%" }}>Some Text</p>
                <div ref={mapRef} style={{ width: "100%", height: "55%" }} />;
            </Section>
            <Section ref={section2Ref} id="winners">
                Test 2
            </Section>
        </main>
    );
}

export default Main;
