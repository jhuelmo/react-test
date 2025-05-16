import { useState } from "react";
import { NavItem } from "../../UI/NavItem/navItem";
import "./navigation.css";
import { useScroll } from "@/context/scrollContext";

//Temp list for demo purpose
const menuItems = [
    { id: "section1", label: "EUROSTAR HOTELS" },
    { id: "section2", label: "PARTICIPA" },
    { id: "section3", label: "LOS GANADORES" },
];

//TODO: add href to items and scroll to section
export function Navigation() {
    const { section1Ref, section2Ref, scrollTo } = useScroll();

    const [activeId, setActiveId] = useState("");

    const refMap: Record<string, React.RefObject<HTMLElement | null>> = {
        section1: section1Ref,
        section2: section2Ref,
        section3: section2Ref,
    };

    const handleClick = (id: string) => {
        setActiveId(id);
        const ref = refMap[id];
        if (ref) {
            scrollTo(ref);
        }
    };

    return (
        <nav>
            <ul>
                {menuItems.map(({ id, label }) => (
                    <NavItem
                        key={id}
                        label={label}
                        isActive={activeId === id}
                        onClick={() => handleClick(id)}
                    />
                ))}
            </ul>
        </nav>
    );
}
