"use client";

import useRoutes from "@/hooks/useRoutes";
import React from "react";
import DesktopItem from "./DesktopItem";
import { MessageCircleHeart } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { User } from "@prisma/client";

interface DesktopProps {
  user: User;
}
const DesktopSidebar = () => {
  const routes = useRoutes();
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:mt-10 lg:ml-5 h-[90%] rounded-xl lg:w-20 xl:px-6 lg:overflow-y-auto lg:bg-gray-800 lg:border-r-[1px] lg:pb-4 lg:flex lg:flex-col justify-between">
      <nav className="mt-4 flex flex-col justify-between">
        <div className="text-primary mt-5 mb-[80px]">
          <MessageCircleHeart className="w-6 h-6" />
        </div>
        <ul role="list" className="flex flex-col items-center space-y-10">
          {routes.map((item) => (
            <DesktopItem
              key={item.label}
              href={item.href}
              icon={item.icon}
              label={item.label}
              active={item.active}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default DesktopSidebar;
