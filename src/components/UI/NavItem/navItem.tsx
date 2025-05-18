import { type AnchorHTMLAttributes } from "react";
import Location from "@/components/UI/Icons/location";

import "./navItem.css";

interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string;
    isActive: boolean;
}

function NavItem({ label, isActive, onClick, href }: NavItemProps) {
    return (
        <li
            className={`nav-item 
            ${isActive && "active"}`}
        >
            <Location className="nav-icon" size="32px" />

            <a href={href} className="nav-link" onClick={onClick}>
                {label}
            </a>
        </li>
    );
}

export { NavItem };
