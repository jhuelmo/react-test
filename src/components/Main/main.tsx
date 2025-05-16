import { useScroll } from "@/context/scrollContext";
import HeroSection from "./HeroSection/heroSection";
import "./main.css";
import Section from "./Section/section";

export function Main() {
    const { section1Ref, section2Ref } = useScroll();

    return (
        <main className="main-container">
            <HeroSection />
            <Section ref={section1Ref} id="map" />
            <Section ref={section2Ref} id="winners" />
        </main>
    );
}

export default Main;
