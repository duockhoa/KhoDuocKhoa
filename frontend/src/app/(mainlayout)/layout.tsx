import Header from "@/components/header/header";
import Sidebar from "@/components/sidebar/sidebar";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <div className="flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
}
