import { usePathname } from "next/navigation";
import useConversation from "./useConversation";
import { useMemo } from "react";
import { MessageSquare, User2 } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: <MessageSquare />,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: <User2 />,
        active: pathname === "/users",
      },
      {
        label: "Settings",
        icon: <UserButton />,
      },
    ],
    [pathname, conversationId]
  );
  return routes;
};

export default useRoutes;
