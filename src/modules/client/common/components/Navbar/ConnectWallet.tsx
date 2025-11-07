'use client'

import React, { useState } from 'react';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { useAppKit } from '@reown/appkit/react';
import { useAccount } from 'wagmi';

const ConnectWallet: React.FC = () => {
  const { open } = useAppKit();
  const { address, isConnected, isConnecting } = useAccount();
  const [error, setError] = useState<string | null>(null);

  const handleClick = async () => {
    try {
      setError(null);
      await open();
    } catch (err) {
      console.error('Error opening wallet modal:', err);
      setError('Không thể kết nối ví');
    }
  };

  const formatAddress = (addr: string, isMobile: boolean = false) => {
    if (isMobile) {
      return `${addr.slice(0, 4)}...${addr.slice(-3)}`;
    }
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  };

  return (
    <div className="relative">
      <button 
        onClick={handleClick}
        disabled={isConnecting}
        className="px-4 py-2.5 text-sm bg-[#00A3FF] text-white rounded-lg hover:bg-[#0086D6] transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isConnecting ? (
          <>
            <IconifyIcon icon="eos-icons:loading" className='w-4 h-5 animate-spin' />
            <span className="hidden sm:inline">Đang kết nối...</span>
          </>
        ) : (
          <>
            <IconifyIcon icon="ph:wallet-fill" className='w-5 h-6' />
            {isConnected && address ? (
              <>
                <span className="hidden sm:inline">{formatAddress(address)}</span>
                <span className="sm:hidden">{formatAddress(address, true)}</span>
              </>
            ) : (
              <>
                <span className="hidden text-base sm:inline">Connect Wallet</span>
                <span className="sm:hidden">Connect</span>
              </>
            )}
          </>
        )}
      </button>
      {error && (
        <div className="absolute top-full mt-2 right-0 bg-red-500 text-white text-xs px-3 py-1 rounded whitespace-nowrap">
          {error}
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;
