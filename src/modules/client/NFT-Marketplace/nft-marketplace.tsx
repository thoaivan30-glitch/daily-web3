'use client';

import { Banner } from "@/modules/client/NFT-Marketplace/components/Banner";
import NFTItemGrid from "@/modules/client/NFT-Marketplace/components/NFTItemGrid";
import NFTOwnershipPerks from "@/modules/client/NFT-Marketplace/components/NFTOwnershipPerks";
import NFTTrade from "@/modules/client/NFT-Marketplace/components/NFTTrade";


const NFTMarketplace = () => {
  return (
    <>
      <Banner />
      <NFTItemGrid />
      <NFTTrade />
      <NFTOwnershipPerks />
    </>
  );
};

export default NFTMarketplace;