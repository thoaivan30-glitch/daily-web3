'use client'

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import IconifyIcon from './IconifyIcon';

const Footer: React.FC = () => {
  const pathname = usePathname();
  
  // Function to check if current path matches the link
  const isCurrentPage = (url: string) => {
    if (url === '/' && pathname === '/') return true;
    if (url !== '/' && pathname.startsWith(url)) return true;
    return false;
  };

  const footerData = {
    brand: {
      name: "DailyWeb3",
      description: "Nền tảng e-commerce Web3 đầu tiên cho đồ dùng hàng ngày với sự minh bạch và quyền sở hữu thực sự."
    },
    socialLinks: [
      { icon: "mdi:twitter", url: "https://twitter.com/dailyweb3", label: "Twitter" },
      { icon: "qlementine-icons:discord-fill-16", url: "https://discord.gg/dailyweb3", label: "Discord" },
      { icon: "streamline-logos:telegram-logo-2-solid", url: "https://t.me/dailyweb3", label: "Telegram" }
    ],
    sections: [
      {
        title: "Sản phẩm",
        links: [
          { text: "Home Decor", url: "/products/home-decor" },
          { text: "Kitchen", url: "/products/kitchen" },
          { text: "Tools", url: "/products/tools" },
          { text: "Personal Care", url: "/products/personal-care" }
        ]
      },
      {
        title: "Web3",
        links: [
          { text: "DAO Governance", url: "/dao" },
          { text: "Token Economics", url: "/tokenomics" },
          { text: "NFT Marketplace", url: "/nft-marketplace" }
        ]
      },
      {
        title: "Hỗ trợ",
        links: [
          { text: "Chính sách bảo mật", url: "/privacy-policy" },
          { text: "Điều khoản sử dụng", url: "/terms-of-service" },
          { text: "Hướng dẫn Wallet", url: "/wallet-guide" },
          { text: "Liên hệ", url: "/contact" }
        ]
      }
    ]
  };

  return (
    <footer className="bg-[#F8F4EE] pt-12 pb-6 px-5">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/">
              <h3 className="text-2xl  text-[#333333] mb-4 font-sora  transition-colors duration-300">
                {footerData.brand.name}
              </h3>
            </Link>
            <p className="text-base text-[#696969] mb-6 leading-relaxed max-w-xs">
              {footerData.brand.description}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {footerData.socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="w-10 h-10 rounded-full bg-[#00A3FF] hover:bg-[#0090E0] flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <IconifyIcon
                    icon={social.icon}
                    className="text-white text-xl"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerData.sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg  text-[#000000] mb-4 font-sora">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => {
                  const isCurrent = isCurrentPage(link.url);
                  return (
                    <li key={linkIndex}>
                      <Link
                        href={link.url}
                        className={`text-base transition-colors duration-300 ${
                          isCurrent 
                            ? 'text-[#00A3FF] font-semibold' 
                            : 'text-[#696969] hover:text-[#00A3FF]'
                        }`}
                      >
                        {link.text}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-black mb-6"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-base text-[#505050]">
            © 2024 DailyWeb3. All rights reserved. Built on Ethereum blockchain.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
