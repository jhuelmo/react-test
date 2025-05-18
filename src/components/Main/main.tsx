import MapSection from "./MapSection/mapSection";

import "./main.css";
import WinnersSection from "./WinnersSection/winnersSection";
import Section from "../UI/Section/section";
import Carousel from "../UI/Carousel/carousel";

//TODO: Create googleMap component
//TODO: Create map
export function Main() {
    return (
        <main className="main-container">
            <Carousel />
            <MapSection />
            <WinnersSection />
        </main>
    );
}

export default Main;
