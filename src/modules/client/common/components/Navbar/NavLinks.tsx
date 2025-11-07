'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLinks: React.FC = () => {
  const pathname = usePathname();

  const links = [
    { href: '/shop', label: 'Shop' },
    { href: '/our-mission', label: 'Our Mission' },
    { href: '/values', label: 'Values' },
  ];

  return (
    <div className="flex items-center text-base gap-8 font-medium">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              relative py-1 transition-colors duration-200
              ${isActive 
                ? 'text-blue-500' 
                : 'text-gray-700 hover:text-blue-500'
              }
              after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 
              after:h-[2px] after:bg-blue-500 after:transition-transform after:duration-200
              ${isActive 
                ? 'after:scale-x-100' 
                : 'after:scale-x-0 hover:after:scale-x-100'
              }
            `}
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};

export default NavLinks;
