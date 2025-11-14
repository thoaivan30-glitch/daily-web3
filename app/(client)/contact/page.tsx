import ClientLayout from "@/modules/client/common/layouts/ClientLayout"; // Đường dẫn đúng theo module
import ContactClientPage from "@/modules/client/pages/ContactClientPage"; // Đường dẫn đúng theo module

export default function ContactClient() {
  return (
    <ClientLayout>
      <ContactClientPage />
    </ClientLayout>
  );
}
