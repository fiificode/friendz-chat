import EmptyState from "@/components/empty-state/EmptyState";
import { UserButton, currentUser } from "@clerk/nextjs";
import React from "react";

const Users = async () => {
  return (
    <div className="hidden lg:block lg:pl-[280px] h-full">
      <EmptyState />
    </div>
  );
};

export default Users;
