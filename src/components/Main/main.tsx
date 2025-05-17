import HeroSection from "./HeroSection/heroSection";
import MapSection from "./MapSection/mapSection";

import "./main.css";
import WinnersSection from "./WinnersSection/winnersSection";

//TODO: Create googleMap component
//TODO: Create map
export function Main() {
    return (
        <main className="main-container">
            <HeroSection />
            <MapSection />
            <WinnersSection />
        </main>
    );
}

export default Main;
