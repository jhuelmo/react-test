import { InfoBar } from "./InfoBar/infobar";
import { Navigation } from "./Navigation/navigation";

export function Header() {
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
