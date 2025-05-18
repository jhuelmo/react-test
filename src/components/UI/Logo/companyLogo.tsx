import reactLogo from "@/assets/company-logo.png";
import "./companyLogo.css";

export default function CompanyLogo() {
    //TODO: Add size prop
    return (
        <div className="logo">
            <img src={reactLogo} alt="Eurostars Hotel" />
        </div>
    );
}
