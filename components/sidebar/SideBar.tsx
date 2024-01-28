import DesktopSidebar from "./DesktopSidebar";
import MobileNav from "./MobileNav";

async function Sidebar({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileNav />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
