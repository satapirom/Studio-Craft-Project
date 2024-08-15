'use client';
import React from 'react';
import useForgotPasswordForm from '@/app/hooks/useForgotPassword';
import Link from 'next/link';

const ForgotPasswordForm = () => {
    const {
        formData,
        errors,
        handleChange,
        handleSubmit,
        handleReset
    } = useForgotPasswordForm();

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#E9E4D6]/5 transition-all duration-300">
            <div className="text-center w-10/12 lg:w-8/12 xl:w-4/12 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-normal">Recover Password</div>
                <div className="my-4 text-sm md:text-lg font-light">
                    Enter your email to recover your password
                </div>
                <form className="text-center mt-6" onSubmit={handleSubmit} noValidate>
                    <input
                        name="email"
                        value={formData.email}
                        type="email"
                        placeholder="E-mail"
                        onChange={handleChange}
                        className={`text-sm md:text-lg font-light p-4 mb-4 lg:mb-6 w-full rounded-md focus:outline-none focus:border-[#AA988A] transition-all duration-300 bg-[#E9E4D6]/50 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && (
                        <p className="flex text-red-500 text-sm mb-4">{errors.email}</p>
                    )}
                    <button
                        type="submit"
                        className="text-sm md:text-lg font-light p-4 mb-2 lg:mb-6 w-full rounded-md bg-[#776f6a] text-white hover:bg-[#625a54] transition-all duration-300"
                    >
                        Recover
                    </button>
                    <div className="mb-4 font-light text-xs md:text-sm">
                        <spen href="#" className="cursor-pointer hover:underline transition-all duration-300">Remember your password?</spen>
                        <Link href="/api/login" className="cursor-pointer hover:underline transition-all duration-300 mx-2">Back to login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ForgotPasswordForm;
