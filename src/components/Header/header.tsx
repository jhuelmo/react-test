import { useScroll } from "@/context/scrollContext";
import { InfoBar } from "./InfoBar/infobar";
import { Navigation } from "./Navigation/navigation";

import "./header.css";

export function Header() {
    //TODO: Responsive header
    //TODO: Improve title
    const { headerRef } = useScroll();

    return (
        <header ref={headerRef} className="header">
            <InfoBar />
            <div className="header-wrapper">
                <div>
                    <h1>EUROPE CITY TOUR</h1>
                </div>
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
