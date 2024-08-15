import React from 'react'
import { useState } from 'react'

const IconSearch = () => {
    const [isOpen, setIsOpen] = useState(false);

    const searchBoxClasses = `transition-all duration-300 ease-in-out overflow-hidden 
    ${isOpen ? 'w-32 sm:w-64 lg:w-96 opacity-100 ml-2' : 'max-w-0 opacity-0'}`;

    return (
        <div className="relative flex items-center">
            <img
                src="/images/icon-search.png"
                alt="Search"
                onClick={() => setIsOpen(!isOpen)}
                className="h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 cursor-pointer"
            />
            <div className={searchBoxClasses}>
                <input
                    type="text"
                    placeholder="Search..."
                    className="py-2 px-4 text-sm font-light rounded-full outline-none transition-all duration-300 bg-[#c2c1c1]/50 w-full"
                />
            </div>
        </div>
    );
}

export default IconSearch