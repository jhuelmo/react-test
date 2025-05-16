import HeroSection from "./HeroSection/heroSection";
import "./main.css";

export function Main() {
    return (
        <main className="main-container">
            <HeroSection />
            <section>Section2</section>
            <section>Section3</section>
        </main>
    );
}

export default Main;
