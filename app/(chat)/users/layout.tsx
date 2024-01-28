import DesktopSidebar from "@/components/sidebar/DesktopSidebar";
import SideBar from "@/components/sidebar/SideBar";
export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SideBar>
        <div className="h-full">
          <DesktopSidebar />
          <main className="lg:pl-20 h-full">{children}</main>
        </div>
      </SideBar>
    </>
  );
}
