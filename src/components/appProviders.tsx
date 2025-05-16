import { ScrollProvider } from "@/context/scrollContext";
import { type ReactNode } from "react";

export default function AppProviders({ children }: { children: ReactNode }) {
    return (
        <>
            <ScrollProvider>{children}</ScrollProvider>
        </>
    );
}
