const PriceTag = ({ price }) => (
    <div className="absolute bottom-2 right-4 bg-[#E9E4D6]/60 hover:bg-[#E9E4D6]/90 text-[#5A5A5A] rounded-sm px-3 py-2">
        <p className="text-base font-light text-gray-900">{price}</p>
    </div>
);

export default PriceTag;
