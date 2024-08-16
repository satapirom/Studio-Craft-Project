'use client';

const Buttons = ({ onDiscard }) => {
    return (
        <div className="flex justify-between mt-6">
            <button
                onClick={onDiscard} // Use onClick instead of onChange
                className="text-gray-500 border border-gray-300 rounded-md py-2 px-4">
                Discard
            </button>
            <div className="flex gap-4">
                <button className="text-blue-600 border border-blue-600 rounded-md py-2 px-4">
                    Schedule
                </button>
                <button className="bg-blue-600 text-white rounded-md py-2 px-4">
                    Add Product
                </button>
            </div>
        </div>
    );
};

export default Buttons;


