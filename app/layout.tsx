import type {Metadata} from "next";
import {Schibsted_Grotesk, Martian_Mono} from "next/font/google";
import "./globals.css";
import LightRays from "@/components/LightRays";
import Navbar from "@/components/Navbar";
import {PostHogProvider} from "./providers";

const schibstedGrotesk = Schibsted_Grotesk({
    variable: "--font-schibsted-grotesk",
    subsets: ["latin"],
});

const martianMono = Martian_Mono({
    variable: "--font-martian-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Occassio",
    description: "Hub for Every Event you Mustn't Miss.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased`}
        >

        <body className="min-h-full flex flex-col">
        <PostHogProvider>
        <Navbar/>
        <div className={"absolute inset-0 top-0 z-[-1] min-h-screen"}>
            <LightRays
                raysOrigin="top-center-offset"
                raysColor="#5dfeca"
                raysSpeed={0.5}
                lightSpread={0.9}
                rayLength={1.5}
                followMouse={true}
                mouseInfluence={0.02}
                noiseAmount={0}
                distortion={0}
                pulsating={false}
                fadeDistance={1}
                saturation={1}
            />
        </div>
        <main>
            {children}
        </main>
        </PostHogProvider>
        </body>
        </html>
    );
}
