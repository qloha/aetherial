'use client';

import React from 'react';

export default function Search() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const form = event.currentTarget;
        const input = form.querySelector<HTMLInputElement>('#urlinput');

        if (input) {
            const characters = 350;
            let url = input.value;

            if (!url.startsWith("http://") && !url.startsWith("https://")) {
                url = "http://" + url;
            }

            url = "http://" + "%40".repeat(characters) + "@" + url.replace(/^https?:\/\//, '');
            window.open(url, '_blank');
        }
    };

    return (
        <form
            id="goto"
            onSubmit={handleSubmit}
            className="flex items-center"
        >
            <input
                id="urlinput"
                type="text"
                placeholder="Enter URL"
                className="border border-gray-300 rounded-l px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 transition"
            >
                Go
            </button>
        </form>
    );
}