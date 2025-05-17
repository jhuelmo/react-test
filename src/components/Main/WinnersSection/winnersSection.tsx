import Section from "@/components/UI/Section/section";
import { useScroll } from "@/context/scrollContext";

export default function WinnersSection() {
    const { section3Ref } = useScroll();
    return <Section ref={section3Ref}>WinnersSection</Section>;
}
