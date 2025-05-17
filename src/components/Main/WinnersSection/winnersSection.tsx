import Section from "@/components/UI/Section/section";
import { useScroll } from "@/context/scrollContext";
import "./winnersSection.css";

export default function WinnersSection() {
    const { section3Ref } = useScroll();
    return (
        <Section ref={section3Ref}>
            <div className="winners-wrapper">
                <h3 className="winners-title">
                    LOS GANADORES DE LAS ESTANCIAS EN HOTELES EUROSTARS
                </h3>
            </div>
        </Section>
    );
}
