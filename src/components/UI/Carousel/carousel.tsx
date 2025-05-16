import { useEffect, useState } from "react";
import angli from "@/assets/slider/angli.jpg";
import room from "@/assets/slider/room.jpg";
import tower from "@/assets/slider/tower.jpg";
import "./carousel.css";

const slides = [
    { id: 1, content: angli },
    { id: 2, content: room },
    { id: 3, content: tower },
];

export default function Carousel() {
    return (
        <div className="carousel" aria-label="Image carousel">
            <div className="carousel-slides">
                {slides.map((slide, index) => (
                    <div key={slide.id}>
                        <img src={slide.content} />
                    </div>
                ))}
            </div>
        </div>
    );
}
