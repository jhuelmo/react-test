import type { HTMLAttributes, RefObject } from "react";
import "./section.css";

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    ref?: RefObject<HTMLElement | null>;
}

export default function Section({ id, ref, children }: SectionProps) {
    return (
        <section id={id} ref={ref} className="section-wrapper">
            {children}
        </section>
    );
}
