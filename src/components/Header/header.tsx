import { InfoBar } from "./InfoBar/infobar";
import { Navigation } from "./Navigation/navigation";

import "./header.css";

export function Header() {
    //TODO: Responsive header
    //TODO: Improve title
    return (
        <header className="header">
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
