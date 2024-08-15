'use client';
import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const useLoginForm = () => {
    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        try {
            const response = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false
            });

            if (response.error) {
                toast.error('Invalid credentials. Please check your email and password.');
                return;
            }
            else {
                toast.error('An unexpected error occurred. Please try again.');
            }
            router.replace('/api/register');

        } catch (error) {
            console.error(error);
            toast.error('An unexpected error occurred. Please try again.');
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit
    };
};
