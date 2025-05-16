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
                        <img src={slide.content} className="carousel-image" />
                    </li>
                ))}
            </ul>
        </div>
    );
}
