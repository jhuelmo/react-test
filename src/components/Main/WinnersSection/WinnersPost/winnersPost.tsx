import Diamond from "@/components/UI/Diamond/diamond";
import "./winnersPost.css";
import Card from "@/components/UI/Card/card";

interface WinnersPost {
    post: {
        winners: string[];
        firstImage: string;
        secondImage: string;
    };
}

export default function WinnersPost({ post }: WinnersPost) {
    return (
        <div className="winners-post">
            <div className="winners-post-title">
                <Diamond color="var(--accent-color)" />
                <h3>ROMA</h3>
                <div className="winners-post-title-separator"></div>
                <div className="winners-card-date">
                    <span>28 abril</span>
                    <span>4 mayo</span>
                </div>
                <Diamond color="var(--accent-color)" />
            </div>
            <Card
                winners={post.winners}
                firstImage={post.firstImage}
                secondImage={post.secondImage}
            />
        </div>
    );
}
