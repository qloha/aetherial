import Link from 'next/link';
import DropdownMenu from './components/Dropdown'; // Adjusted path

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <header className="flex justify-between items-center px-8 py-4">
            <Link href="/" className="text-2xl font-bold text-blue-500 hover: transition duration-200">
                aetherial
            </Link>
            <nav className="flex space-x-6">
                <DropdownMenu />
                <Link href="/" className="relative font-medium group">
                    <span>Thing</span>
                    <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-400 transition-all group-hover:w-full"></span>
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