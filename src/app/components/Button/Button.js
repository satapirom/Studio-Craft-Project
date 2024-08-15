// components/Button.js
import React from 'react';

const Button = ({ type, className, onClick, children }) => (
    <button
        type={type}
        className={`text-sm md:text-lg font-light p-4 mb-2 lg:mb-6 w-full rounded-md transition-all duration-300 ${className}`}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;
