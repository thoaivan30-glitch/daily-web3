import "../src/styles/globals.css";
import { Web3Provider } from "@/context/Web3Provider";
// Import tất cả css vào đây

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body>
        <Web3Provider>
          {children}
        </Web3Provider>
      </body>
    </html>
  );
}
