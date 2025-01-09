import React from 'react';
import './globals.css';

export default function HomePage() {
    return (
        <div className="flex flex-col justify-center items-center h-screen space-y-6">
            {/* Title */}
            <h1 className="text-6xl font-bold text-gray-900">Aetherial</h1>

            {/* Search Bar */}
            <form
                className="flex flex-col items-center gap-4 w-full max-w-md"
                onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const urlInput = (event.currentTarget.elements.namedItem('urlinput') as HTMLInputElement).value.trim();
                    if (urlInput) {
                        window.open(
                            urlInput.startsWith('http://') || urlInput.startsWith('https://')
                                ? urlInput
                                : `http://${urlInput}`,
                            '_blank'
                        );
                    }
                }}
            >
                <input
                    id="urlinput"
                    type="text"
                    placeholder="Enter URL"
                    className="w-full bg-gray-200 text-gray-800 p-3 rounded-md text-center placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Go
                </button>
            </form>
        </div>
    );
}