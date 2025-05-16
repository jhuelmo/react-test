import React, {
    createContext,
    useContext,
    useRef,
    type ReactNode,
    type RefObject,
} from "react";

type ScrollContextType = {
    section1Ref: RefObject<HTMLElement | null>;
    section2Ref: RefObject<HTMLElement | null>;
    section3Ref: RefObject<HTMLElement | null>;
    scrollTo: (ref: RefObject<HTMLElement | null>) => void;
};

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
    const section1Ref = useRef<HTMLElement>(null);
    const section2Ref = useRef<HTMLElement>(null);
    const section3Ref = useRef<HTMLElement>(null);

    const scrollTo = (ref: RefObject<HTMLElement | null>) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <ScrollContext.Provider
            value={{ section1Ref, section2Ref, section3Ref, scrollTo }}
        >
            {children}
        </ScrollContext.Provider>
    );
};

export const useScroll = (): ScrollContextType => {
    const context = useContext(ScrollContext);
    if (!context) {
        throw new Error("useScroll must be used within a ScrollProvider");
    }
    return context;
};
