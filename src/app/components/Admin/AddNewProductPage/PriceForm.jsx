'use client';

import React from 'react';

const PricingForm = ({ formData, handleChange }) => {
    return (
        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">
                Price
            </label>
            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min={1}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
        </div>
    );
};

export default PricingForm;
