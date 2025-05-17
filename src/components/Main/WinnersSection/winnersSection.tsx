import Section from "@/components/UI/Section/section";
import { useScroll } from "@/context/scrollContext";
import "./winnersSection.css";
import Card from "@/components/UI/Card/card";

import roma from "@/assets/images/roma.jpg";
import statue from "@/assets/images/statue.jpg";
import suite from "@/assets/images/suite.jpg";

import data from "@/data/winners-data.json";
import Diamond from "@/components/UI/Diamond/diamond";
import WinnersTitle from "./WinnersTitle/winnersTitle";

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
                <h2 className="winners-title">
                    LOS GANADORES DE LAS ESTANCIAS EN HOTELES EUROSTARS
                </h2>
                <div className="winners-card-container">
                    {data.cards.map((card) => (
                        <>
                            <WinnersTitle />
                            <Card
                                winners={card.winners}
                                firstImage={getImage(card.firstImage)}
                                secondImage={getImage(card.secondImage)}
                            />
                        </>
                    ))}
                </div>
            </div>
        </Section>
    );
    //TODO: Typing error
    function getImage(key: string): string {
        return images[key as keyof typeof images] || "";
    }
}
