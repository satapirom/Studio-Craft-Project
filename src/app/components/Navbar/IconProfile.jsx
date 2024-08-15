'use client';
import React from 'react';
import Link from 'next/link';

const IconProfile = () => {
    return (
        <div className="flex items-center">
            <Link href='/api/login'>
                <img
                    src='/images/icon-profile.png'
                    alt='Profile'
                    className='h-4 w-4 md:h-6 md:w-6 lg:h-8 lg:w-8 cursor-pointer'
                />
            </Link>
        </div>
    );
};

export default IconProfile;
