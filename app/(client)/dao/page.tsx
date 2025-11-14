import ClientLayout from "@/modules/client/common/layouts/ClientLayout"; // Đường dẫn đúng theo module
import ShopClientPage from "@/modules/client/pages/DAOGovernanceClientPage"; // Đường dẫn đúng theo module

export default function DAOGovernanceClient() {
  return (
    <ClientLayout>
      <ShopClientPage />
    </ClientLayout>
  );
}
