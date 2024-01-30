import getUsers from "@/actions/getUsers";
import DesktopSidebar from "@/components/sidebar/DesktopSidebar";
import SideBar from "@/components/sidebar/SideBar";
import UserList from "./users/components/userList";
export default async function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const users = await getUsers();
  return (
    <>
      <SideBar>
        <div className="h-full">
          <DesktopSidebar />
          <UserList items={users} />

          <main className="lg:pl-20 h-full">{children}</main>
        </div>
      </SideBar>
    </>
  );
}
