import { useScroll } from "@/context/scrollContext";
import { Navigation } from "./Navigation/navigation";

import "./header.css";
import CompanyLogo from "../UI/Logo/companyLogo";
import Title from "./Title/title";

export function Header() {
    //TODO: Responsive header
    //TODO: Improve title
    const { headerRef } = useScroll();

    return (
        <header ref={headerRef} className="header">
            <div className="info-bar">
                <div className="right-container">
                    <CompanyLogo />
                </div>
            </div>
            <div className="header-wrapper">
                <Title />
                <Navigation />
            </div>
        </header>
    );
}

export default Header;
