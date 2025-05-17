import "./card.css";
import roma from "@/assets/images/roma.jpg";
import statue from "@/assets/images/statue.jpg";
import suite from "@/assets/images/suite.jpg";

export default function Card() {
    return (
        <div className="card-wrapper">
            <div>ROMA</div>
            <div className="card-container">
                <div className="card-image-container">
                    <img className="card-image" src={roma} />
                    <img className="card-image" src={statue} />
                </div>

                <div className="card-info">
                    <h4>FELICIDADES!</h4>
                </div>
            </div>
        </div>
    );
}
