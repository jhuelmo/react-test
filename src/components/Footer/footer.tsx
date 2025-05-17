import Location from "../UI/Icons/location";
import Logo from "../UI/Logo/logo";
import SocialMedia from "../UI/SocialMedia/socialMedia";
import "./footer.css";

export default function Footer() {
    //TODO: Add clickable to social media
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <Logo />
                <div className="social-media-wrapper">
                    <SocialMedia name={"facebook"} size={26} />
                    <SocialMedia name={"youtube"} size={26} />
                    <SocialMedia name={"instagram"} size={26} />
                    <SocialMedia name={"twitter"} size={26} />
                    <SocialMedia name={"pinterest"} size={26} />
                </div>
            </div>
        </footer>
    );
}
