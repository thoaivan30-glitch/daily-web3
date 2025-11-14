import ClientLayout from "@/modules/client/common/layouts/ClientLayout"; // Đường dẫn đúng theo module
import MissionClientPage from "@/modules/client/pages/MissionClientPage"; // Đường dẫn đúng theo module

export default function MissionClient() {
  return (
    <ClientLayout>
      <MissionClientPage />
    </ClientLayout>
  );
}
