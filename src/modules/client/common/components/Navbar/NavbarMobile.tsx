'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import NavLinks from './NavLinks';
import ConnectWallet from './ConnectWallet';
import Button from './Button';
import Search from './Search';
import CategoryNavigationBarMobile from '@/modules/client/home/components/CategoryNavigationBarMobile';

const NavbarMobile: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsSearchOpen(false); // Close search when opening menu
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        setIsMenuOpen(false); // Close menu when opening search
    };

    // Prevent body scroll when menu or search is open
    useEffect(() => {
        if (isMenuOpen || isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen, isSearchOpen]);

    return (
        <>
            <nav className="2xl:hidden bg-white border-b border-gray-200 relative z-50">
                {/* Top Bar */}
                <div className="flex items-center justify-between px-4 py-4">
                    {/* Logo */}
                    <Link href="/">
                        <h1 className="text-xl font-sora font-normal text-gray-900">DailyWeb3</h1>
                    </Link>

                    {/* Right Icons */}
                    <div className="flex items-center gap-3">
                        {/* Connect Wallet Button */}
                        <ConnectWallet />

                        {/* Search Icon */}
                        <button
                            onClick={toggleSearch}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Search"
                        >
                            <IconifyIcon
                                icon="tabler:search"
                                width={24}
                                height={24}
                                className="text-gray-700"
                            />
                        </button>

                        {/* Hamburger Menu */}
                        <button
                            onClick={toggleMenu}
                            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                            aria-label="Toggle menu"
                        >
                            <IconifyIcon
                                icon="mdi:menu"
                                width={28}
                                height={28}
                                className="text-gray-700"
                            />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Search Modal */}
            {isSearchOpen && (
                <div className="fixed inset-0 z-50 2xl:hidden flex items-start justify-center pt-20 px-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={toggleSearch}
                    />

                    {/* Search Content */}
                    <div className="relative bg-white rounded-2xl shadow-2xl p-6 w-full max-w-md animate-slide-down">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold text-blue-600">Search</h2>
                            <button
                                onClick={toggleSearch}
                                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                            >
                                <IconifyIcon icon="mdi:close" width={20} height={20} className="text-gray-700" />
                            </button>
                        </div>
                        <Search />
                    </div>
                </div>
            )}

            {/* Sidebar Menu */}
            <div
                className={`
          fixed inset-y-0 right-0 z-[9999] w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out 2xl:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
            >
                {/* Menu Header */}
                <div className="flex items-center justify-end px-6 py-4 border-b border-gray-200">
                    <button
                        onClick={toggleMenu}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <IconifyIcon icon="mdi:close" width={24} height={24} className="text-gray-700" />
                    </button>
                </div>

                {/* Menu Content */}
                <div className="px-6 py-6 space-y-6 overflow-y-auto max-h-[calc(100vh-80px)]">
                    {/* Categories */}
                    <div>
                        <CategoryNavigationBarMobile />
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200"></div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-4">
                        <NavLinks />
                    </div>

                    {/* Divider */}
                    <div className="border-t border-gray-200"></div>

                    {/* Cart and Profile Icons */}
                    <div className="flex items-center justify-center">
                        <Button />
                    </div>
                </div>
            </div>

            {/* Backdrop for Sidebar */}
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] 2xl:hidden"
                    onClick={toggleMenu}
                />
            )}
        </>
    );
};

export default NavbarMobile;
