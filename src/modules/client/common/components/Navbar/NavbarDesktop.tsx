import React from 'react';
import NavLinks from './NavLinks';
import Search from './Search';
import Button from './Button';
import ConnectWallet from './ConnectWallet';
import Link from 'next/link';

const NavbarDesktop: React.FC = () => {
    return (
        <nav className="hidden 2xl:flex items-center justify-between px-32 py-4 bg-white border-b border-gray-200">
            {/* Logo Section */}
            <div className="flex items-center">
                <Link href="/">
                    <h1 className="text-2xl font-sora font-normal text-gray-900">DailyWeb3</h1>
                </Link>
            </div>

            {/* Navigation Links */}
            <NavLinks />

            {/* Right Section: Search, Connect Wallet, Cart, Profile */}
            <div className="flex items-center gap-4">
                <Search />
                <ConnectWallet />
                <Button />
            </div>
        </nav>
    );
};

export default NavbarDesktop;
