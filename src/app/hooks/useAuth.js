'use client';
import { useState, useEffect } from 'react';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const useAuth = () => {
    const { data: session, status } = useSession();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const router = useRouter();

    const handleLogout = () => {
        signOut({ callbackUrl: '/' });
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    useEffect(() => {
        if (status === 'loading') return; // Do nothing while loading
        if (!session) router.push('/api/login'); // Redirect to login if not authenticated
    }, [session, status, router]);

    return {
        session,
        isDropdownOpen,
        toggleDropdown,
        handleLogout
    };
};

export default useAuth;
