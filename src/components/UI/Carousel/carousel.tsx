import { useCallback, useState } from "react";
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

//TODO: Add automatic slider rotation & tablet controls
//TODO: Responsive

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    return (
        <div className="carousel" aria-label="Image carousel">
            <ul
                className="carousel-slides"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
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
                        className={`carousel-indicator ${
                            index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentIndex ? "true" : "false"}
                    />
                ))}
            </div>
        </div>
    );
}
