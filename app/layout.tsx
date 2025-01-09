import Link from 'next/link';
import React from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <header className="flex justify-between items-center px-6 py-4">
            <Link href="/" className="text-2xl font-bold">
                Aetherial
            </Link>
            <nav className="flex space-x-6">
                <Link href="/" className="font-medium">
                    Thing 1
                </Link>
                <Link href="/" className="font-medium">
                    Thing 2
                </Link>
            </nav>
        </header>
        <main className="flex justify-center items-center min-h-screen">
            {children}
        </main>
        </body>
        </html>
    );
}