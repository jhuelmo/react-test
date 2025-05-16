import "./heroSection.css";

import Carousel from "@/components/UI/Carousel/carousel";

export default function HeroSection() {
    return (
        <section
            className="hero-wrapper"
            aria-label="Eurostars hotels room images carousel"
        >
            <Carousel></Carousel>
        </section>
    );
}
