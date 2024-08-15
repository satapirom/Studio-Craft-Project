'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import HeartIcon from '@/app/components/ProductCard/HearIcon';
import PriceTag from '@/app/components/ProductCard/PriceTag';

const ProductCard = ({ imageUrl, price, productId }) => {
    const [isFavorited, setIsFavorited] = useState(false);

    useEffect(() => {
        // ตรวจสอบสถานะการบันทึกเมื่อคอมโพเนนต์โหลด
        const savedStatus = localStorage.getItem(`favorite-${productId}`);
        setIsFavorited(savedStatus === 'true');
    }, [productId]);

    const handleFavoriteClick = () => {
        const newStatus = !isFavorited;
        setIsFavorited(newStatus);
        localStorage.setItem(`favorite-${productId}`, newStatus);
        console.log(newStatus ? 'Added to favorites' : 'Removed from favorites');
    };

    return (
        <div className="max-w-sm bg-white shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:scale-105">
            <div className="relative">
                <Image
                    className="w-[406px] h-[466px]"
                    src={imageUrl}
                    alt="Product Image"
                    layout="responsive"
                    width={406}
                    height={466}
                />
                <button
                    className="absolute top-2 left-2 p-2 shadow-md focus:outline-none bg-transparent border-none cursor-pointer"
                    onClick={handleFavoriteClick}
                >
                    <HeartIcon isFavorited={isFavorited} />
                </button>
                <PriceTag price={price} />
            </div>
        </div>
    );
};

export default ProductCard;