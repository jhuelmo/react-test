import { useCallback, useEffect, useState } from "react";
import angli from "@/assets/slider/angli.jpg";
import room from "@/assets/slider/room.jpg";
import tower from "@/assets/slider/tower.jpg";
import "./carousel.css";
import Diamond from "../Diamond/diamond";

//List for demo purpose
const slides = [
    { id: 1, content: room, alt: "Habitacion Hotel Eurostar" },
    { id: 2, content: angli, alt: "Angli room Hotel Eurostar" },
    { id: 3, content: tower, alt: "Tprre Hotel Eurostar" },
];

//TODO: Add tablet controls
//TODO: Responsive

export default function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    let totalSlides = slides.length;

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    //LoopEffect
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <div className="carousel" aria-label="Image carousel">
            <ul className="carousel-slides">
                {slides.map((slide, index) => (
                    <li
                        key={slide.id}
                        className={`carousel-slide 
                    ${index === currentIndex && "active"}
                    ${index === currentIndex + 1 && "next"}
                    ${index === currentIndex - 1 && "prev"}
                    ${index === currentIndex + 1 && "next"}

                    `}
                    >
                        <img
                            src={slide.content}
                            className="carousel-image"
                            alt=""
                        />
                    </li>
                ))}
            </ul>

            {/* Carousel indicators */}
            <div className="carousel-indicator-contrainer">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-indicator`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                        aria-current={index === currentIndex ? "true" : "false"}
                    >
                        <Diamond
                            className={`${
                                index === currentIndex ? "active" : ""
                            }`}
                        ></Diamond>
                    </button>
                ))}
            </div>
        </div>
    );
}
