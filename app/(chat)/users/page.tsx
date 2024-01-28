import EmptyState from "@/components/empty-state/EmptyState";
import { UserButton, currentUser } from "@clerk/nextjs";
import React from "react";

const Users = async () => {
  const user = await currentUser();
  return (
    <div className="hidden lg:block lg:pl-80 h-full">
      <EmptyState />
    </div>
  );
};

export default Users;
