'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useLoginForm } from '@/app/hooks/useLoginForm'; // ตรวจสอบให้แน่ใจว่ามันถูกนำเข้ามาอย่างถูกต้อง
import InputField from '@/app/components/InputField/inputField';
import Button from '../Button/Button';
import { ToastContainer } from 'react-toastify'; // Import Toastify
import 'react-toastify/dist/ReactToastify.css';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        errors,
        showPassword,
        togglePasswordVisibility,
        onSubmit
    } = useLoginForm();

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#E9E4D6]/5 transition-all duration-300">
            <div className="text-center w-10/12 lg:w-8/12 xl:w-4/12 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-normal">Login</div>
                <div className="my-4 text-sm md:text-lg font-light">
                    Enter your email and password to login
                </div>
                <form className="text-center mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        type="email"
                        placeholder="E-mail"
                        register={register}
                        name="email"
                        validation={{ required: 'Email is required' }}
                        error={errors.email}
                    />
                    <InputField
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        register={register}
                        name="password"
                        validation={{ required: 'Password is required' }}
                        error={errors.password}
                        showPassword={showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                        maxLength={16}
                    />
                    <div className="flex justify-start mb-4 font-light text-xs md:text-sm">
                        <Link href='/login/forgot-password' className="cursor-pointer hover:underline transition-all duration-300">
                            Forgot your password?
                        </Link>
                    </div>
                    <Button
                        type="submit"
                        className="bg-[#776f6a] text-white hover:bg-[#625a54]"
                    >
                        Login
                    </Button>
                </form>
                <div className="relative my-8 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-1/2 border-t border-[#AA988A]/80"></span>
                        <span className='w-1/3 font-light text-xs md:text-sm'> Or continue with</span>
                        <span className="w-1/2 border-t border-[#AA988A]/80"></span>
                    </div>
                </div>
                <div className="relative">
                    <Button
                        type="button"
                        className="bg-[#DDDFDD]/50 hover:bg-[#E9E4D6]/60 flex items-center justify-center"
                    >
                        <img
                            src="/images/icon-google.svg"
                            alt="Google"
                            className="w-8 h-8 mx-2"
                        />
                        Sign in with Google
                    </Button>
                </div>
                <div className="mb-4 font-light text-xs md:text-sm">
                    <span className="mr-2">Don't have an account?</span>
                    <Link href='/api/register' className="cursor-pointer hover:underline transition-all duration-300 text-blue-600">
                        Sign up
                    </Link>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default LoginForm;


