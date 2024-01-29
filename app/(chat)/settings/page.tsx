import { UserProfile } from "@clerk/nextjs";
import React from "react";

const Settings = () => {
  return (
    <div className=" lg:block lg:pl-80">
      <div className="mt-10 mr-10 h-[70%]">
        <UserProfile />
      </div>
    </div>
  );
};

export default Settings;
