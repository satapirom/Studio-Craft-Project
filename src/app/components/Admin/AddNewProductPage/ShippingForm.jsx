'use client';

import React from 'react';

const ShippingForm = ({ formData, handleChange }) => {
    return (
        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
                Items Weight
            </label>
            <input
                type="number"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
                min={1}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />

            <label className="block text-sm font-medium text-gray-700 mt-6">
                Package Size (The package you use to ship your product)
            </label>
            <div className="grid grid-cols-3 gap-4">
                <input
                    type="number"
                    name="length" // Ensure the name matches the state key
                    value={formData.length} // Ensure the key exists in formData
                    onChange={handleChange}
                    min={0}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                    placeholder="Length"
                />
                <input
                    type="number"
                    name="breadth"
                    value={formData.breadth}
                    onChange={handleChange}
                    min={0}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                    placeholder="Breadth"
                />
                <input
                    type="number"
                    name="width"
                    value={formData.width}
                    onChange={handleChange}
                    min={0}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                    placeholder="Width"
                />
            </div>
        </div>
    );
};

export default ShippingForm;
