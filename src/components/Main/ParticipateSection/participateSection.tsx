import Diamond from "@/components/UI/Diamond/diamond";
import Section from "@/components/UI/Section/section";
import { useScroll } from "@/context/scrollContext";

import "./participateSection.css";

export default function ParticipateSection() {
    const { section1Ref } = useScroll();

    return (
        <Section id="participa" ref={section1Ref}>
            <div className="participate-wrapper">
                <div className="participate-main-container">
                    <div className="participate-title-container">
                        <div className="participate-title">
                            <Diamond
                                color="var(--contrast-color)"
                                size="0.8rem"
                            />
                            <h3>DESTINO 1</h3>
                            <Diamond
                                color="var(--contrast-color)"
                                size="0.8rem"
                            />
                        </div>
                        <h4>28 abril - 4 mayo</h4>
                    </div>
                    <div className="participate-card">
                        <span>
                            Responde correctamente y gana una de las cinco
                            estancias en hoteles Eurostars que sorteamos en
                            nuestro destino secreto.
                        </span>
                    </div>
                </div>
                <div className="participate-bot-container">Bottom</div>
            </div>
        </Section>
    );
}
