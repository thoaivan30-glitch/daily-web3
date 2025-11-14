import ClientLayout from "@/modules/client/common/layouts/ClientLayout"; // Đường dẫn đúng theo module
import PrivacyPolicyClientPage from "@/modules/client/pages/PrivacyPolicyClientPage"; // Đường dẫn đúng theo module

export default function ShopClient() {
  return (
    <ClientLayout>
      <PrivacyPolicyClientPage />
    </ClientLayout>
  );
}
