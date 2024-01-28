import { UserButton } from "@clerk/nextjs";
import React from "react";

const Users = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Users;
