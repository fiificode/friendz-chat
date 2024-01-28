"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface DesktopItemProps {
  label: string;
  icon: any;
  href?: string;
  active?: boolean;
}
const DesktopItem: React.FC<DesktopItemProps> = ({
  label,
  icon: Icon,
  href,
  active,
}) => {
  return (
    <li className="">
      <Link
        href={href ? href : "#"}
        className={cn(
          `group flex gap-x-3 rounded-full p-3 text-sm leading-6 font-semibold text-gray-500 hover:text-black hover:bg-gray-100`,
          active && "bg-white text-primary"
        )}
      >
        {Icon}
        {/* <Icon className="h-6 w-6 shrink-0" /> */}
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
