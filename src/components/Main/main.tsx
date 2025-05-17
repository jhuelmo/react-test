import { useScroll } from "@/context/scrollContext";
import HeroSection from "./HeroSection/heroSection";
import Section from "../UI/Section/section";
import MapSection from "./MapSection/mapSection";

import "./main.css";

//TODO: Create googleMap component
//TODO: Create map
export function Main() {
    const { section2Ref } = useScroll();

    return (
        <main className="main-container">
            <HeroSection />
            <MapSection />
            <Section ref={section2Ref} id="winners">
                Test 2
            </Section>
        </main>
    );
}

export default Main;
