import { useState } from "react";
import { NavItem } from "../../UI/NavItem/navItem";
import "./navigation.css";

//Temp list for demo purpose
const menuItems = [
    { id: "participa", label: "PARTICIPA" },
    { id: "eurostar", label: "EUROSTAR HOTELS" },
    { id: "ganadores", label: "LOS GANADORES" },
];

export function Navigation() {
    const [activeId, setActiveId] = useState("");

    return (
        <nav>
            <ul>
                {menuItems.map(({ id, label }) => (
                    <NavItem
                        key={id}
                        label={label}
                        isActive={activeId === id}
                        onClick={() => setActiveId(id)}
                    />
                ))}
            </ul>
        </nav>
    );
}
