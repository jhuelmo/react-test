import Diamond from "@/components/UI/Diamond/diamond";
import "./winnersTitle.css";
export default function WinnersTitle() {
    return (
        <div className="winners-card-title">
            <Diamond color="var(--accent-color)" />
            <h3>ROMA</h3>
            <div className="winners-card-title-separator"></div>
            <div className="winners-card-date">
                <span>28 abril</span>
                <span>4 mayo</span>
            </div>
            <Diamond color="var(--accent-color)" />
        </div>
    );
}
