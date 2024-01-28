"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface MobileItemProps {
  label: string;
  icon: any;
  href?: string;
  active?: boolean;
}

const MobileItem: React.FC<MobileItemProps> = ({
  label,
  icon,
  href,
  active,
}) => {
  return (
    <Link
      href={href ? href : "#"}
      className={cn(
        `group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-500 hover:text-black hover:bg-gray-100`,
        active && "bg-white text-primary"
      )}
    >
      <div>{icon}</div>
    </Link>
  );
};

export default MobileItem;
