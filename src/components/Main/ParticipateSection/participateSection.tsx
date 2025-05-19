import Diamond from "@/components/UI/Diamond/diamond";
import Section from "@/components/UI/Section/section";
import { useScroll } from "@/context/scrollContext";

import quizPhoto from "@/assets/roma.jpg";

import "./participateSection.css";
import Location from "@/components/UI/Icons/location";

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
                    <form className="participate-card-wrapper">
                        <div className="participate-card">
                            <span>
                                Responde correctamente y gana una de las cinco
                                estancias en hoteles Eurostars que sorteamos en
                                nuestro destino secreto.
                            </span>
                            <div className="input-container">
                                <input placeholder="placeholder" />
                                <input placeholder="placeholder" />
                            </div>
                        </div>

                        <div className="quiz-container">
                            <div className="quiz-inner-container">
                                <img />
                                <span>
                                    Sabes qué capital eurpea debemos visitar
                                    para encontrar esta fuente?
                                </span>
                                <div className="quiz-answer-container">
                                    <div className="quiz-answer">
                                        <button className="quiz-answer-button">
                                            <Location size="2.5rem" />
                                        </button>
                                        <span>ROMA</span>
                                    </div>
                                    <div className="quiz-answer">
                                        <button className="quiz-answer-button">
                                            <Location size="2.5rem" />
                                        </button>
                                        <span>ROMA</span>
                                    </div>
                                    <div className="quiz-answer">
                                        <button className="quiz-answer-button">
                                            <Location size="2.5rem" />
                                        </button>
                                        <span>ROMA</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-photo-container">
                            <div className="card-photo-wrapper">
                                <img src={quizPhoto} alt="Fuente Roma" />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="participate-bot-container">Bottom</div>
            </div>
        </Section>
    );
}
