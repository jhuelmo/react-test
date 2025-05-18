import Carousel from "../UI/Carousel/carousel";
import MapSection from "./MapSection/mapSection";
import WinnersSection from "./WinnersSection/winnersSection";

import "./mainLayout.css";

export function MainLayout() {
    return (
        <main className="main-container">
            <Carousel />
            <MapSection />
            <WinnersSection />
        </main>
    );
}

export default MainLayout;
