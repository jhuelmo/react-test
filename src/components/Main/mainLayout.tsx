import Carousel from "../UI/Carousel/carousel";
import MapSection from "./MapSection/mapSection";
import ParticipateSection from "./ParticipateSection/participateSection";
import WinnersSection from "./WinnersSection/winnersSection";

import "./mainLayout.css";

export function MainLayout() {
    return (
        <main className="main-container">
            <Carousel />
            <MapSection />
            <WinnersSection />
            <ParticipateSection />
        </main>
    );
}

export default MainLayout;
