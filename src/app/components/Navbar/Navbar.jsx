'use client'
import { useState } from 'react';
import IconSearch from '@/app/components/Navbar/IconSearch';
import IconProfile from './IconProfile';
import IconCarts from './IconCarts';
import Link from 'next/link';
import { signOut } from 'next-auth/react';


const Nevbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <div className="absolute top-0 left-0 right-0 flex justify-between mx-4 my-6 md:mx-6 md:my-8 lg:py-8 lg:px-10">
                <div className="flex items-center">
                    <img
                        onClick={() => setIsOpen(!isOpen)}
                        src='/images/icon-menu.png'
                        className='h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 cursor-pointer'
                        alt="Menu"
                    />
                    <div>
                        <Link href='/'>
                            <h2
                                className='text-sm md:text-xl lg:text-2xl font-light mx-2 md:mx-4 h-4 md:h-6 lg:h-8 flex items-center cursor-pointer hover:text-[#AA988A]'>
                                Studio Carft
                            </h2>
                        </Link>
                    </div>
                </div>
                <div className="flex gap-2 md:gap-4">
                    <IconSearch />
                    <IconProfile />
                    <IconCarts />
                </div>
            </div>
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity duration-300"
                />
            )}
            <div className={`fixed top-0 left-0 w-[300px] md:w-[400px] lg:w-[500px] h-screen bg-white z-20 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="relative p-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-10 right-10 h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 flex items-center justify-center bg-[#AA988A]/50 rounded-full"
                    >
                        <img
                            src='/images/icon-close.png'
                            alt='Close'
                            className='h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8'
                        />
                    </button>
                    <h2 className="text-lg md:text-xl lg:text-2xl font-normal mt-8 mx-4">Studio Craft</h2>
                    <div className='text-sm md:text-lg lg:text-xl font-light mx-4 pb-6 pt-8 md:pb-8 md:pt-10 cursor-pointer  border-b-2 border-[#AA988A]'>Home</div>
                    <div className='text-sm md:text-lg lg:text-xl font-light mx-4 pb-6 pt-8 md:pb-8 md:pt-10 cursor-pointer  border-b-2 border-[#AA988A]'>Our Products</div>
                    <div className='text-sm md:text-lg lg:text-xl font-light mx-4 pb-6 pt-8 md:pb-8 md:pt-10 cursor-pointer  border-b-2 border-[#AA988A]'>Blogs</div>
                    <div className='text-sm md:text-lg lg:text-xl font-light mx-4 pb-6 pt-8 md:pb-8 md:pt-10 cursor-pointer  border-b-2 border-[#AA988A]'>Contact Us</div>
                </div>
            </div>
        </div>
    );
};

export default Nevbar;
