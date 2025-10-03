import { ReactNode } from "react";

export default function Container({ children }: { children: ReactNode }) {
return <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">{children}</div>;
}