'use client'
const ProductDetailsForm = ({ formData, handleChange }) => {
    return (
        <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700">Product Name</label>
            <input
                type="text"
                name="productName"
                value={formData?.productName || ''}
                onChange={handleChange}
                minLength={3}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />

            <label className="block text-sm font-medium text-gray-700 mt-6">Business Description</label>
            <textarea
                name="description"
                value={formData?.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 h-24"
                rows="4"
            ></textarea>
            <button className="text-blue-600 text-sm mt-2">Upload .txt file</button>

            <label className="block text-sm font-medium text-gray-700 mt-6">Product Category</label>
            <select
                name="category"
                value={formData?.category}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            >
                <option>Health & Medicine</option>
                <option>Beauty</option>
                {/* Add more categories here */}
            </select>

            <label className="block text-sm font-medium text-gray-700 mt-6">Quantity</label>
            <input
                type="number"
                name="quantity"
                value={formData?.quantity}
                onChange={handleChange}
                min={1}
                max={1000}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />

            <label className="block text-sm font-medium text-gray-700 mt-6">SKU (Optional)</label>
            <input
                type="text"
                name="sku" // Make sure this is correct
                value={formData?.sku} // Make sure this is correct
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
            />
        </div>
    );
};

export default ProductDetailsForm;
