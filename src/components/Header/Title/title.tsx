import "./title.css";
import logo from "@/assets/logo.png";

export default function Title() {
    return (
        <div className="title-wrapper">
            <div className="title-logo-wrapper">
                <img className="title-logo" src={logo} />
            </div>

            <div className="subtitle-wrapper">
                <p className="subtitle-text">By EUROSTARS HOTELS</p>
            </div>
        </div>
    );
}
