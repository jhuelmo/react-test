import Section from "@/components/UI/Section/section";
import { useScroll } from "@/context/scrollContext";
import "./winnersSection.css";
import Card from "@/components/UI/Card/card";

export default function WinnersSection() {
    const { section3Ref } = useScroll();
    return (
        <Section ref={section3Ref}>
            <div className="winners-wrapper">
                <h3 className="winners-title">
                    LOS GANADORES DE LAS ESTANCIAS EN HOTELES EUROSTARS
                </h3>
                <div className="winners-card-container">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </Section>
    );
}
