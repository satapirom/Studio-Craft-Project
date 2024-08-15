'use client';
import { useState } from 'react';

const useForgotPasswordForm = () => {
    const [formData, setFormData] = useState({ email: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.email) {
            newErrors.email = 'Please fill out the email field';
        } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            // Handle form submission, e.g., API call
            console.log("Form data submitted:", formData);

            // Reset form data and errors after successful submission
            setFormData({ email: '' });
            setErrors({});
        }
    };

    const handleReset = () => {
        setFormData({ email: '' });
        setErrors({});
    };

    return {
        formData,
        errors,
        handleChange,
        handleSubmit,
        handleReset
    };
};

export default useForgotPasswordForm;
