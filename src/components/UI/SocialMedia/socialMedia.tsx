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
}

export default function SocialMedia({ name, size = 24 }: SocialIconProps) {
    return (
        <div
            className={`social social-${name}`}
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
