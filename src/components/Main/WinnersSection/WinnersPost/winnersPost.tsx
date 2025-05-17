import Diamond from "@/components/UI/Diamond/diamond";
import "./winnersPost.css";
import Card from "@/components/UI/Card/card";

interface WinnersPost {
    post: {
        title: string;
        date?: {
            startDate: string;
            endDate: string;
        };
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
                <h3>{post.title}</h3>
                {post.date && (
                    <>
                        <div className="winners-post-title-separator"></div>
                        <div className="winners-card-date">
                            <span>{post.date.startDate}</span>
                            <span>{post.date.endDate}</span>
                        </div>
                    </>
                )}
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
