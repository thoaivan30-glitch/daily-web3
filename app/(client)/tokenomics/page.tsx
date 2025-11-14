import ClientLayout from "@/modules/client/common/layouts/ClientLayout"; // Đường dẫn đúng theo module
import TokenEconomicsClientPage from "@/modules/client/pages/TokenEconomicsClientPage"; // Đường dẫn đúng theo module

export default function TokenEconomicsClient() {
  return (
    <ClientLayout>
      <TokenEconomicsClientPage />
    </ClientLayout>
  );
}
