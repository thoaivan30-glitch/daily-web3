import ClientLayout from "@/modules/client/common/layouts/ClientLayout"; // Đường dẫn đúng theo module
import NFTMarketplaceClientPage from "@/modules/client/pages/NFTMarketplace"; // Đường dẫn đúng theo module

export default function NFTMarketplaceClient() {
  return (
    <ClientLayout>
      <NFTMarketplaceClientPage />
    </ClientLayout>
  );
}
