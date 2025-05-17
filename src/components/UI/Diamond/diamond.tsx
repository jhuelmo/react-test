import type { HTMLAttributes, ReactNode } from "react";
import "./diamond.css";

interface DiamondProps extends HTMLAttributes<HTMLElement> {
    color?: string;
    size?: string;
}

export default function Diamond({
    children,
    color = "#272626",
    size = "0.5rem",
    className,
}: DiamondProps) {
    return (
        <div
            className={`diamond ${className}`}
            style={{
                backgroundColor: color,
                width: size,
                height: size,
            }}
        >
            {children}
        </div>
    );
}
