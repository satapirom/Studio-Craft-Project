// src/components/InputField.js
import React from 'react';
import usePasswordVisibility from '../../hooks/usePasswordVisibility';

const InputField = ({ type, placeholder, register, name, validation, error, maxLength }) => {
    const { isVisible, toggleVisibility } = usePasswordVisibility();

    return (
        <div className="relative mb-4 lg:mb-6 w-full">
            <div className="flex items-center w-full">
                <input
                    type={type === "password" && !isVisible ? "password" : "text"}
                    placeholder={placeholder}
                    className={`text-sm md:text-lg font-light p-4 w-full rounded-md focus:outline-none focus:border-[#AA988A] transition-all duration-300 bg-[#E9E4D6]/50 ${error ? 'border-red-500' : ''}`}
                    maxLength={maxLength}
                    {...register(name, validation)}
                />
                {type === "password" && (
                    <div className="absolute right-3 flex items-center h-full">
                        <img
                            src={isVisible ? "/images/icon-eye-open.svg" : "/images/icon-eye-close.svg"}
                            alt={isVisible ? "Hide password" : "Show password"}
                            className="cursor-pointer w-6 h-6 transition-all duration-300"
                            onClick={toggleVisibility}
                        />
                    </div>
                )}
            </div>
            {error && <p className="text-red-500 text-xs mt-1">{error.message}</p>}
        </div>
    );
};

export default InputField;


