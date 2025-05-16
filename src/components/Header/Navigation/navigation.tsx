import { useState } from "react";
import { NavItem } from "../../UI/NavItem/navItem";
import "./navigation.css";

export function Navigation() {
    const [activeLabel, setActiveLabel] = useState("");

    return (
        <nav>
            <ul>
                <NavItem
                    label="PARTICIPA"
                    isActive={activeLabel === "PARTICIPA"}
                    onClick={() => setActiveLabel("PARTICIPA")}
                />
                <NavItem
                    label="EUROSTAR HOTELS"
                    isActive={activeLabel === "EUROSTAR HOTELS"}
                    onClick={() => setActiveLabel("EUROSTAR HOTELS")}
                />
                <NavItem
                    label="LOS GANADORES"
                    isActive={activeLabel === "LOS GANADORES"}
                    onClick={() => setActiveLabel("LOS GANADORES")}
                />
            </ul>
        </nav>
    );
}
