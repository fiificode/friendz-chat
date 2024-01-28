import { MessageCircleHeart } from "lucide-react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full w-screen">
      <div className="m-5 flex animate-bounce items-center justify-center px-5 text-2xl">
        <MessageCircleHeart />
        <h1>Friendz Chat</h1>
      </div>
      <div className="">{children}</div>
    </div>
  );
};

export default AuthLayout;
