import Section from "@/components/UI/Section/section";
import "./mapSection.css";
import Diamond from "@/components/UI/Diamond/diamond";
import { useScroll } from "@/context/scrollContext";
import MapLoader from "@/components/UI/Map/mapLoader";

export default function MapSection() {
    const { section2Ref } = useScroll();
    return (
        <Section ref={section2Ref}>
            <div className="map-section-container">
                <h3>
                    Eurostars Hotels es una cadena de hoteles con alma española
                    y voación internacional
                </h3>
                <div className="map-section-separator">
                    <Diamond color="var(--accent-color)" />
                    <Diamond size="0.7rem" color="var(--contrast-color)" />
                    <Diamond color="var(--accent-color)" />
                </div>
                <p>
                    Con la seguridad de los clásicos y con el espiritu innovador
                    de las vanguardias.
                </p>
                <p>
                    Una cadena joven nacida en 2005 con más de
                    <b> 70 hoteles en 40 destinos </b>de todo el mundo.
                </p>
                <p>
                    En eurostars buscamos que nuestros clientes vivan toda una
                    experiencia y por ello nos esforzamos al maximo en el trato,
                    el servicio y la cercanía
                </p>
            </div>
            <MapLoader />
        </Section>
    );
}
