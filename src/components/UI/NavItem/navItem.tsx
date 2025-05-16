import type { AnchorHTMLAttributes } from "react";
import "./navItem.css";
import Location from "@/components/UI/Icons/location";

interface NavItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    label: string;
    isActive: boolean;
}

function NavItem({ label, isActive, onClick }: NavItemProps) {
    const className = `nav-link${isActive ? " active" : ""}`;

    return (
        <li className="nav-item">
            {isActive && <Location className="nav-icon" size="32px" />}

            <a className={className} onClick={onClick}>
                {label}
            </a>
        </li>
    );
}

export { NavItem };
