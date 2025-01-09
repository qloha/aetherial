'use client';

import {useRef, useState} from 'react';

export default function DropdownMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const closeTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
            closeTimeout.current = null;
        }
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setIsOpen(false);
        }, 200);
    };

    return (
        <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="relative font-medium text-gray-700 group">
                <span>Things</span>
                <span className="absolute -bottom-1 left-0 w-0 h-2 bg-blue-400 transition-all group-hover:w-full"></span>
            </button>
            {isOpen && (
                <ul className="absolute bg-white shadow-md rounded w-36 mt-2 z-50 border border-gray-200">
                    <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Thing 1</li>
                    <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Thing 2</li>
                    <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">Thing 3</li>
                </ul>
            )}
        </div>
    );
}