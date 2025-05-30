import "./card.css";

interface CardProps {
    firstImage: {
        url: string;
        alt: string;
    };
    secondImage: {
        url: string;
        alt: string;
    };
    winners: string[];
}
//TODO: Load hotel name dinamically?
export default function Card({ firstImage, secondImage, winners }: CardProps) {
    return (
        <div className="card-wrapper">
            <div className="card-container">
                <div className="card-image-container">
                    <div className="card-image-wrapper">
                        <img
                            className="card-image"
                            src={firstImage.url}
                            alt={firstImage.alt}
                        />
                    </div>
                    <div className="card-image-wrapper">
                        <img
                            className="card-image"
                            src={secondImage.url}
                            alt={secondImage.alt}
                        />
                    </div>
                </div>

                <div className="card-info">
                    <h4 className="card-info-title">FELICIDADES!</h4>
                    <span className="card-info-description">
                        <p>
                            Habéis ganado una estancia para
                            <u> Eurostars International Place 4*</u>
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
