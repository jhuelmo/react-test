import { socialIcons } from "./socialIcons";
import "./socialMedia.css";

type SocialName =
    | "facebook"
    | "twitter"
    | "youtube"
    | "instagram"
    | "pinterest";

interface SocialIconProps {
    name: SocialName;
    size?: number;
    onlyIcon?: boolean;
    className?: string;
}

export default function SocialMedia({
    name,
    size = 24,
    onlyIcon = false,
    className,
}: SocialIconProps) {
    return (
        <div
            className={`social social-${name} 
                ${className}
                ${!onlyIcon && "background"}`}
            style={{
                width: size,
                height: size,
                display: "inline-block",
            }}
        >
            <span
                className="social-icon"
                dangerouslySetInnerHTML={{ __html: socialIcons[name] }}
            />
        </div>
    );
}
