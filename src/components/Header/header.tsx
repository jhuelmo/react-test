import { useScroll } from "@/context/scrollContext";
import { Navigation } from "./Navigation/navigation";

import "./header.css";
import Logo from "../UI/Logo/logo";

export function Header() {
    //TODO: Responsive header
    //TODO: Improve title
    const { headerRef } = useScroll();

    return (
        <header ref={headerRef} className="header">
            <div className="info-bar">
                <div className="right-container">
                    <Logo />
                </div>
            </div>
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
