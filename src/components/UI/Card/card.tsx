import "./card.css";

interface CardProps {
    image1: string;
    image2: string;
    winners: string[];
}

export default function Card({ image1, image2, winners }: CardProps) {
    return (
        <div className="card-wrapper">
            <div className="card-container">
                <div className="card-image-container">
                    <div className="card-image-wrapper">
                        <img className="card-image" src={image1} />
                    </div>
                    <div className="card-image-wrapper">
                        <img className="card-image" src={image2} />
                    </div>
                </div>

                <div className="card-info">
                    <h4 className="card-info-title">FELICIDADES!</h4>
                    <span className="card-info-description">
                        <p>Habéis ganado una estancia para</p>
                        <p>
                            <u>Eurostars International Place 4*</u>
                        </p>
                    </span>
                    <ul className="card-info-list">
                        {winners.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
