import Location from "../UI/Icons/location";
import CompanyLogo from "../UI/Logo/companyLogo";
import SocialMedia from "../UI/SocialMedia/socialMedia";
import "./footer.css";

export default function Footer() {
    //TODO: Add clickable to social media
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-logo-wrapper">
                    <CompanyLogo />
                </div>
                <div className="social-media-wrapper">
                    <SocialMedia name={"facebook"} size={22} />
                    <SocialMedia name={"youtube"} size={22} />
                    <SocialMedia name={"instagram"} size={22} />
                    <SocialMedia name={"twitter"} size={22} />
                    <SocialMedia name={"pinterest"} size={22} />
                </div>
            </div>
        </footer>
    );
}
