import Section from "@/components/UI/Section/section";
import { useScroll } from "@/context/scrollContext";
import WinnersPost from "./WinnersPost/winnersPost";

import "./winnersSection.css";

import data from "@/data/winners-data.json";

export default function WinnersSection() {
    const { section3Ref } = useScroll();

    return (
        <Section ref={section3Ref}>
            <div className="winners-wrapper">
                <h2 className="winners-title">
                    LOS GANADORES DE LAS ESTANCIAS EN HOTELES EUROSTARS
                </h2>
                <div className="winners-card-container">
                    {data.posts.map((post) => (
                        <>
                            <WinnersPost post={post} />
                        </>
                    ))}
                </div>
            </div>
        </Section>
    );
}
