import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Lucas Marta",
    description: "Computer science teacher, a frontend designer, and an aspiring software engineer.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${geistSans.variable} h-full antialiased`}>
            <head>
                <link rel="icon" type="image/jpeg" href="/me.jpeg"/>
                <title>Lucas Marta</title>
            </head>
            <body className="min-h-full flex flex-col">
                {children}
            </body>
        </html>
    );
}
