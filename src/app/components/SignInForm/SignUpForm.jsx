// components/SignUpForm.js
'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { validateLogin } from '@/app/validations/loginValidation';
import InputField from '../InputField/inputField';
import Button from '../Button/Button';
import { toast } from 'react-toastify';
import { registerUser } from '@/app/services/authService';

const SignUpForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const router = useRouter();

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    const onSubmit = async (data) => {
        const result = await registerUser(data);

        if (result.success) {
            toast.success(result.message);
            router.push('/api/login');
        } else {
            toast.error(result.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#E9E4D6]/5 transition-all duration-300">
            <div className="text-center w-10/12 lg:w-8/12 xl:w-4/12 transition-all duration-300">
                <div className="text-2xl md:text-3xl font-normal">
                    Sign Up
                </div>
                <div className="my-4 text-sm md:text-lg font-light">
                    Please fill in the information below
                </div>
                <form className="text-center mt-6" onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                        type="text"
                        placeholder="First name"
                        register={register}
                        name="firstName"
                        validation={validateLogin.firstName}
                        error={errors.firstName}
                    />
                    <InputField
                        type="text"
                        placeholder="Last name"
                        register={register}
                        name="lastName"
                        validation={validateLogin.lastName}
                        error={errors.lastName}
                    />
                    <InputField
                        type="email"
                        placeholder="E-mail"
                        register={register}
                        name="email"
                        validation={validateLogin.email}
                        error={errors.email}
                    />
                    <InputField
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        register={register}
                        name="password"
                        validation={validateLogin.password}
                        error={errors.password}
                        showPassword={showPassword}
                        togglePasswordVisibility={togglePasswordVisibility}
                        maxLength={16}
                    />
                    <Button
                        type="submit"
                        className="bg-[#776f6a] text-white hover:bg-[#625a54]"
                    >
                        Sign Up
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
                        Sign Up with Google
                    </Button>
                </div>
                <div className="mb-4 font-light text-xs md:text-sm">
                    <span className="mr-2">
                        Already have an account?
                    </span>
                    <Link href='/api/login'
                        className="cursor-pointer hover:underline transition-all duration-300 text-blue-600">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUpForm;

