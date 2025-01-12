'use client'; // Ensure this is a Client Component

import Link from 'next/link';
import DropdownMenu from './components/Dropdown';
import SearchForm from './components/Search';
import React, { useEffect } from "react";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    useEffect(() => {
        const url = window.location.origin + "/aetherial";

        const win = window.open();

        if (win) {
            const iframe = win.document.createElement('iframe');
            iframe.setAttribute('style', "position:fixed;width:100vw;height:100vh;top:0px;left:0px;right:0px;bottom:0px;z-index:2147483647;background-color:white;border:none;");

            if (url.startsWith('https://') || url.startsWith("http://")) {
                iframe.src = url;
            } else {
                iframe.src = "https://" + url;
            }

            win.document.body.appendChild(iframe);

            window.location.href = "https://docs.google.com";
        } else {
            console.error("Popup blocked. Unable to open the new window.");
        }
    }, []);

    return (
        <html lang="en">
        <body>
        <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
            <Link href="/" className="text-2xl font-bold text-blue-500 hover: transition duration-200">
                aetherial
            </Link>
            <SearchForm />
            <nav className="flex space-x-6">
                <DropdownMenu />
                <Link href="/settings" className="relative font-medium group">
                    <span>Settings</span>
                    <span
                        className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span>
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