import reactLogo from "@/assets/logo.png";
import "./logo.css";

export default function Logo() {
    //TODO: Add size prop
    return (
        <a className="logo">
            <img src={reactLogo} />
        </a>
    );
}
