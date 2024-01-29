import DesktopSidebar from "./DesktopSidebar";
import MobileNav from "./MobileNav";
import { currentUser } from "@clerk/nextjs";

async function Sidebar({ children }: { children: React.ReactNode }) {
  const user = await currentUser();
  console.log(user);

  return (
    <div className="h-full">
      <DesktopSidebar />
      <MobileNav />
      <main className="lg:pl-20 h-full">{children}</main>
    </div>
  );
}

export default Sidebar;
