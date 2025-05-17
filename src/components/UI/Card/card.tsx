import "./card.css";
import roma from "@/assets/images/roma.jpg";
import statue from "@/assets/images/statue.jpg";
import suite from "@/assets/images/suite.jpg";

export default function Card() {
    return (
        <div className="card-wrapper">
            <div className="card-container">
                <div className="card-image-container">
                    <div className="card-image-wrapper">
                        <img className="card-image" src={roma} />
                    </div>
                    <div className="card-image-wrapper">
                        <img className="card-image" src={statue} />
                    </div>
                </div>

                <div className="card-info">
                    <h4 className="card-info-title">FELICIDADES!</h4>
                    <span className="card-info-description">
                        <p>Habéis ganado una estancia para</p>
                        <p>
                            <u>Eurostars International Place 4</u>
                        </p>
                    </span>
                    <ul className="card-info-list">
                        <li>Nombre</li>
                        <li>Nombre</li>
                        <li>Nombre</li>
                        <li>Nombre</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
