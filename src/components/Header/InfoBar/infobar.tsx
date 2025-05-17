import Logo from "@/components/UI/Logo/logo";
import "./infobar.css";

export function InfoBar() {
    return (
        <div className="info-bar-wrapper">
            <div className="info-bar">
                <div className="right-container">
                    <Logo />
                </div>
            </div>
        </div>
    );
}
