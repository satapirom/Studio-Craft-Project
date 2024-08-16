// AddNewProduct.js
'use client';
import React from "react";
import useForm from "@/app/hooks/useForm";
import ProductDetailsForm from "@/app/components/Admin/AddNewProductPage/ProductDetailsForm";
import ProductImagesForm from "@/app/components/Admin/AddNewProductPage/ProductImgesForm";
import ShippingForm from "@/app/components/Admin/AddNewProductPage/ShippingForm";
import PricingForm from "@/app/components/Admin/AddNewProductPage/PriceForm";
import Buttons from "@/app/components/Admin/AddNewProductPage/Buttons";
import useImageUploader from "@/app/hooks/useImageUploader";

const initialFormState = {
    productName: '',
    description: '',
    category: '',
    quantity: '',
    sku: '',
    weight: '',
    length: '',
    breadth: '',
    width: '',
    price: '',
};

const icon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="3em"
        height="3em"
        viewBox="0 0 32 32"
        className="rounded-sm shadow-2xl border-2 border-slate-400"
    >
        <g fill="none">
            <path fill="#ffffff" d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4z" />
            <path
                fill="black"
                d="M7.417 15.557a1 1 0 0 0 0 1.386l5.113 5.313c.624.649 1.72.207 1.72-.693V18.5a.25.25 0 0 1 .25-.25h9.75a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H14.5a.25.25 0 0 1-.25-.25v-3.063c0-.9-1.096-1.342-1.72-.693z"
            />
        </g>
    </svg>
);

const AddNewProduct = () => {
    const { formData, handleChange, resetForm } = useForm(initialFormState);
    const { uploadedImages, getRootProps, getInputProps, removeImage, replaceImage } = useImageUploader();


    return (
        <div className="py-24 px-8">
            <div className="flex mb-6">
                <button className="text-gray-500 hover:text-gray-700">{icon}</button>
                <div className="ml-4">
                    <h3>Back to product list</h3>
                    <h1 className="text-2xl font-semibold">Add New Product</h1>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                    <ProductDetailsForm
                        formData={formData}
                        handleChange={handleChange} />
                </div>
                <div className="flex-1">
                    <ProductImagesForm
                        formData={formData}
                        handleChange={handleChange}
                        uploadedImages={uploadedImages}
                        getRootProps={getRootProps}
                        getInputProps={getInputProps}
                        onRemove={removeImage}
                        replaceImage={replaceImage}
                    />
                    <ShippingForm formData={formData} handleChange={handleChange} />
                    <PricingForm formData={formData} handleChange={handleChange} />
                    <Buttons onDiscard={resetForm} />
                </div>
            </div>
        </div>
    );
};

export default AddNewProduct;
