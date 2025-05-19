import Diamond from "@/components/UI/Diamond/diamond";
import Section from "@/components/UI/Section/section";
import { useScroll } from "@/context/scrollContext";

import quizPhoto from "@/assets/roma.jpg";

import "./participateSection.css";
import Location from "@/components/UI/Icons/location";
import SocialMedia from "@/components/UI/SocialMedia/socialMedia";

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
                            <span className="participate-card-text">
                                Responde correctamente y gana una de las cinco
                                estancias en hoteles Eurostars que sorteamos en
                                nuestro destino secreto.
                            </span>
                            <div className="participate-card-bottom">
                                <div className="participate-input-container">
                                    <input placeholder="Nombre" />
                                    <input placeholder="Apellidos" />
                                    <input placeholder="Email" />
                                    <button>Enviar</button>
                                </div>
                                <div className="participate-checkbox-container">
                                    <input type="checkbox" />
                                    <label>
                                        Acepto las Bases del programa, la
                                        Política de privacidad y Proteción de
                                        datos
                                    </label>
                                </div>
                                <div className="participate-socialMedia-wrapper">
                                    <div className="participate-socialMedia-container">
                                        <span>Te gusta? Compártelo</span>
                                        <SocialMedia
                                            size={18}
                                            onlyIcon
                                            name={"facebook"}
                                        />
                                        <div className="participate-socialMedia-separator" />
                                        <SocialMedia
                                            size={18}
                                            onlyIcon
                                            name={"twitter"}
                                        />
                                        <div className="participate-socialMedia-separator" />

                                        <SocialMedia
                                            size={18}
                                            onlyIcon
                                            name={"youtube"}
                                        />
                                        <div className="participate-socialMedia-separator" />

                                        <SocialMedia
                                            size={18}
                                            onlyIcon
                                            name={"instagram"}
                                        />
                                        <div className="participate-socialMedia-separator" />

                                        <SocialMedia
                                            size={18}
                                            onlyIcon
                                            name={"pinterest"}
                                        />
                                    </div>
                                </div>
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
                <div className="participate-bot-container">
                    <div className="participate-bot-separator"></div>
                    <h2>EUROSTARS HOTELS</h2>
                    <p>
                        LO IMPORTANTE NO ES QUE HOTEL ELIGES, SINO POR QUÉ LO
                        ELIGES
                    </p>
                </div>
            </div>
        </Section>
    );
}
