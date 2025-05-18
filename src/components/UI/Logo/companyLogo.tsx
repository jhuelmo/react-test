import reactLogo from "@/assets/company-logo.png";
import "./companyLogo.css";

export default function CompanyLogo() {
    //TODO: Add size prop
    return (
        <a className="logo">
            <img src={reactLogo} />
        </a>
    );
}
