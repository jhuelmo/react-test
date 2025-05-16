import { useEffect, useState } from "react";
import angli from "@/assets/slider/angli.jpg";
import room from "@/assets/slider/room.jpg";
import tower from "@/assets/slider/tower.jpg";
import "./carousel.css";

//List for demo purpose
const slides = [
    { id: 1, content: room },
    { id: 2, content: angli },
    { id: 3, content: tower },
];

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="carousel" aria-label="Image carousel">
            <ul className="carousel-slides">
                {slides.map((slide, index) => (
                    <li key={slide.id} className="carousel-slide">
                        <div className="carousel-image-container">
                            <img
                                src={slide.content}
                                className="carousel-image"
                            />
                        </div>
                    </li>
                ))}
            </ul>

            {/* Carousel indicators */}
            <div className="carousel-indicator-contrainer">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentIndex ? "true" : "false"}
                    />
                ))}
            </div>
        </div>
    );
}
