'use client';
import React from 'react';
import Link from 'next/link';
import useAuth from '@/app/hooks/useAuth'; // Import the custom hook
import DropdownMenu from './DropdownMenu';

const IconProfile = () => {
    const { session, isDropdownOpen, toggleDropdown, handleLogout } = useAuth();

    return (
        <div className="relative flex items-center">
            {session ? (
                <>
                    <img
                        src='/images/icon-profile.png'
                        alt='Profile'
                        className='h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 cursor-pointer'
                        onClick={toggleDropdown}
                    />
                    <DropdownMenu isOpen={isDropdownOpen} onLogout={handleLogout} />
                </>
            ) : (
                <Link href='/api/login'>
                    <img
                        src='/images/icon-profile.png'
                        alt='Profile'
                        className='h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 cursor-pointer'
                    />
                </Link>
            )}
        </div>
    );
};

export default IconProfile;
