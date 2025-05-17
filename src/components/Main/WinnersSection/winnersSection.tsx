import Section from "@/components/UI/Section/section";
import { useScroll } from "@/context/scrollContext";
import "./winnersSection.css";
import Card from "@/components/UI/Card/card";

import roma from "@/assets/images/roma.jpg";
import statue from "@/assets/images/statue.jpg";
import suite from "@/assets/images/suite.jpg";

import data from "@/data/winners-data.json";

export default function WinnersSection() {
    const { section3Ref } = useScroll();

    const images = {
        "roma.jpg": roma,
        "statue.jpg": statue,
        "suite.jpg": suite,
    };

    return (
        <Section ref={section3Ref}>
            <div className="winners-wrapper">
                <h3 className="winners-title">
                    LOS GANADORES DE LAS ESTANCIAS EN HOTELES EUROSTARS
                </h3>
                <div className="winners-card-container">
                    {data.cards.map((card, index) => (
                        <Card
                            winners={card.winners}
                            image1={getImage(card.image1)}
                            image2={getImage(card.image2)}
                        />
                    ))}
                    ;
                </div>
            </div>
        </Section>
    );

    function getImage(key: string): string {
        return images[key as keyof typeof images] || "";
    }
}
