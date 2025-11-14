import ClientLayout from "@/modules/client/common/layouts/ClientLayout"; // Đường dẫn đúng theo module
import ShopClientPage from "@/modules/client/pages/ShopClientPage"; // Đường dẫn đúng theo module

export default function ShopClient() {
  return (
    <ClientLayout>
      <ShopClientPage />
    </ClientLayout>
  );
}
