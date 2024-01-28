import { UserButton, currentUser } from "@clerk/nextjs";
import React from "react";

const Users = async () => {
  const user = await currentUser();
  return (
    <div>
      User: {user?.firstName}
      createdAt: {user?.createdAt}
      other:{user?.imageUrl}
      <br />
      others:{user?.username}
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Users;
