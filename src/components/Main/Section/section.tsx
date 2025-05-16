import type { RefObject } from "react";
import "./section.css";

interface SectionProps {
    id: string;
    ref: RefObject<HTMLElement | null>;
    children: React.ReactNode;
}

export default function Section({ id, ref, children }: SectionProps) {
    return (
        <section ref={ref} className="section-wrapper">
            {children}
        </section>
    );
}
