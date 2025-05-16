import type { RefObject } from "react";
import "./section.css";

interface SectionProps {
    id: string;
    ref: RefObject<HTMLElement | null>;
}

export default function Section({ id, ref }: SectionProps) {
    return (
        <section ref={ref} className="section-wrapper">
            <p>Test</p>
        </section>
    );
}
