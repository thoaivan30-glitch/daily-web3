import ClientLayout from "@/modules/client/common/layouts/ClientLayout"; // Đường dẫn đúng theo module
import TermsSectionListClientPage from "@/modules/client/pages/TermsSectionListCLientPage"; // Đường dẫn đúng theo module

export default function TermsSectionListClient() {
  return (
    <ClientLayout>
      <TermsSectionListClientPage />
    </ClientLayout>
  );
}
