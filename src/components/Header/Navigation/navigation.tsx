import { useState } from "react";
import { NavItem } from "../../UI/NavItem/navItem";
import "./navigation.css";
import { useScroll } from "@/context/scrollContext";

//Temp list for demo purpose
const menuItems = [
    { id: "participa", label: "PARTICIPA" },
    { id: "eurostar", label: "EUROSTAR HOTELS" },
    { id: "ganadores", label: "LOS GANADORES" },
];

//TODO: add href to items and scroll to section
export function Navigation() {
    const { section1Ref, section2Ref, section3Ref, scrollTo } = useScroll();

    const [activeId, setActiveId] = useState("");

    const refMap: Record<string, React.RefObject<HTMLElement | null>> = {
        participa: section1Ref,
        eurostar: section2Ref,
        ganadores: section3Ref,
    };

    const handleClick = (id: string) => {
        setActiveId(id);
        const ref = refMap[id];
        if (ref) {
            scrollTo(ref);
        }
    };

    return (
        <nav className="nav">
            <ul className="nav-menu">
                {menuItems.map(({ id, label }) => (
                    <NavItem
                        key={id}
                        label={label}
                        href={`#${id}`}
                        isActive={activeId === id}
                        onClick={() => handleClick(id)}
                    />
                ))}
            </ul>
        </nav>
    );
}
